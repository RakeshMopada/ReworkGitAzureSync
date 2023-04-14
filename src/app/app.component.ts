import { Component, Inject } from '@angular/core';
import { APP_DATA, AppData } from 'iab-odin-angular-extensions-library';




@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor(@Inject(APP_DATA) public appData: AppData) { }

}
