@ECHO off
if not defined in_subprocess (cmd /k set in_subprocess=y ^& %0 %*) & exit )
setlocal EnableDelayedExpansion

SET allowed_characters=a b c d e f g h i j k l m n o p q r s t u v w x y z - ^1 ^2 ^3 ^4 ^5 ^6 ^7 ^8 ^9 ^0


:ask_project_name
SET /p new_project_name="Enter new project name: "
CALL :verify_project_name !new_project_name! valid
IF !valid!==0 (
   ECHO Invalid project name. Make sure to use kebab casing. [example-project-name]
   ECHO.
   GOTO :ask_project_name
)
CALL :read_angular.json
ECHO Found project name: !old_project_name!.
CHOICE /C YNC /M "Is this correct? ([Y]es, [N]o, [C]ancel) "
IF !ERRORLEVEL!==3 ( GOTO :end)
IF !ERRORLEVEL!==1 ( GOTO :replace_all_instances)
CALL :get_custom_old_project_name
:replace_all_instances
ECHO Replacing instances... Do NOT close this windows!
CALL :replace_in_file "e2e\src\app.e2e-spec.ts"
CALL :replace_in_file "package.json"
CALL :replace_in_file "package-lock.json"
CALL :replace_in_file "angular.json"
CALL :replace_in_file "azure-pipelines.yml"
CALL :replace_in_file "odin.json"

:end
ECHO Finished!
EXIT /B 0






:verify_project_name
   SET temp=%~1
   SET %2=1
   SET pos=0
   :next-char
      set char=!temp:~%pos%,1!
      set /a pos=!pos!+1
      IF NOT [!char!]==[] ( CALL :check_valid_character !char! valid_character )
      IF !valid_character!==0 ( GOTO :invalid_project_name )
      if NOT [!char!]==[] ( GOTO :next-char )
   GOTO :exit_verify_project_name
   :invalid_project_name
      SET %2=0
   :exit_verify_project_name
EXIT /B 0


:read_angular.json
   for /F "tokens=*" %%A in (angular.json) do (
      IF !contains!==1 (
         CALL :replace "%%A" " " "" out
         CALL :replace "!out!" "{" "" out
         CALL :replace "!out!" : "" out
         SET old_project_name=!out:"=!
      )
      CALL :contains "%%A" ^"projects^"^: contains
   )
EXIT /B 0


:contains
   SET line=%1
   SET search=%2
   If NOT %1==!line:%search%=! (
      SET %3=1
   ) else (
      SET %3=0
   )
EXIT /B 0

:replace
   SET origin=%~1
   SET replace=%~2
   SET replaced_by=%~3
   SET %4=!origin:%replace%=%replaced_by%!
EXIT /B 0

:get_custom_old_project_name
   SET /p old_project_name="Enter old project name: "
EXIT /B 0

:replace_in_file
   SET filename=%~1

   ( FOR /F "delims=" %%G in  ('type "!filename!" ^& break ^> "!filename!" ') do (
   set "str=%%G"
   set "str=!str:%old_project_name%=%new_project_name%!"
   echo !str!
   endlocal
   )) > .tmp

   ( FOR /F "delims=" %%G in  ('type ".tmp" ^& break ^> ".tmp" ') do (
   set "str=%%G"
   echo !str!
   endlocal
   )) > !filename!

   DEL .tmp
EXIT /B 0



:check_valid_character
   SET %2=0
   for %%A in (!allowed_characters!) do (
      IF %%A==%1 ( SET %2=1 )
   )
EXIT /B 0
