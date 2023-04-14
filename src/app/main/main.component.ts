import { Component, OnInit, ViewChild, OnDestroy, ViewContainerRef } from '@angular/core';
import { CoreBase, IUserContext } from '@infor-up/m3-odin';
import { TranslateService } from 'iab-odin-angular-extensions-library';
import { SohoModalDialogService } from 'ids-enterprise-ng';
import { UserService } from '@infor-up/m3-odin-angular';

@Component({
   selector: 'app-main',
   templateUrl: './main.component.html',
   styleUrls: ['./main.component.css']
})
export class MainComponent extends CoreBase {

   private userContext: IUserContext;

   constructor(
      private userService: UserService
   ) {
      super('MainComponent');
      this.userService.getUserContext().subscribe((userContext) => {
         this.userContext = userContext;
         Soho.Locale.set(userContext.languageTag);
      });

   }


   public sumAandB(a: number, b: number): number {
      return a + b;
   }

   public newMethod() {
      // comment
   }
}
