# ApplicationTemplate

This project was generated with [Odin CLI](https://github.com/infor-cloud/m3-h5-sdk).

To use this project install the odin cli as a global package in npm

      npm install -g @infor-up/m3-odin-cli

## Development server

Run `odin serve` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.
### targeting a multi tenant environment

Run `odin serve --multi-tenant` for a dev server. To allow connections with M3 use the Odin SDK MT Login utility.

Which can be found [here](https://github.com/infor-cloud/m3-h5-sdk/tree/master/login)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `odin build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Fork this project

Go to the repository site of this [template](https://alfabetasolutions.visualstudio.com/IAB%20Absolutely%20Food/_git/Application%20Template?path=%2F&version=GBmaster)

Use the fork functionality to fork this project as a start for your own application.

Change the application-template references to your own application name in package.json, angular.json, index.html, azure-pipelines.yml and change the m3 url in odin.json

app version and id can be changed in main.module.ts keep this in sync with the version in package.json

## Installing dependencies

Run `npm install -g vsts-npm-auth` to install a command line tool to authenticate against the private repo

Run `vsts-npm-auth -config .npmrc` to generate your credentials for the private repo. Add `-f` to force generation of new credentials

Finally run `npm install` to download all dependencies

## Build pipeline

The azure-pipelines.yml file contains the build pipeline configuration.

for this to work you need to give your projects build service read permissions on the private npm repository.

Artifact > nightly > feed settings > permissions > [project name] build service

## Translations

Translating html elements require the i18n tag

For elements containing text like span you add the i18n attribute:

      i18n="Meaning|description/context@@translationID"

For attributes containing text like placeHolder you add i18n-attributename:

      i18n-placeHolder="Meaning|description/context@@translationID"

You might also need translations outside of the html to use translations in this manner you have to use the `TranslateService`

This service gets its translations from the translate component, to make translations available to the service add this to your html:

      <lib-translate>
         <div #translation id="Cancel" i18n="Cancel|text for cancel button@@Cancel">Cancel
         </div>
         <div #translation id="Submit" i18n="Next|text for submit button@@Submit">Next
         </div>
         <div #translation id="ReportSelectionHeader"`
            i18n="Select custom list|text for report selection modal header@@ReportSelectionHeader">Select custom list
         </div>
      </lib-translate>

The lib-translate component will add the divs marked with #translation to the translate service with the text in the id attribute as the id
The i18n translation will be inside the div as a result of the production build

The build step will need your translations to add them to the final build.
To do this you will first need to run

      ng xi18n

this will generate a messages.xlf file which contains an element for each translation marked html node

move the file to src/locale and make a copy for the relevant languages, for english this will be messages.en.xlf

Each trans-unit in this file has a source node, these need to be translated and the translation added to the trans-unit as a target node

      <trans-unit id="noTrans" datatype="html">
        <source>No translation available</source>
        <target>No translation available</target>
        <context-group purpose="location">
          <context context-type="sourcefile">../node_modules/iab-odin-angular-extensions-library/lib/translate/translate.component.d.ts</context>
          <context context-type="linenumber">4</context>
        </context-group>
        <note priority="1" from="description">if in the translate service an unknown service id is requisted this text is returned</note>
        <note priority="1" from="meaning">translation not available</note>
      </trans-unit>

Translating elements from the index.html is not possible as this is a static file, if you need to modify the title use the [Title service](https://angular.io/api/platform-browser/Title) from angular

For more information regarding i18n in angular see the [official guide](https://angular.io/guide/i18n)
