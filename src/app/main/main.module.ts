import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import {
  APP_DATA,
  AuthorizationGuard,
  IabOdinAngularExtensionsLibraryModule,
  AppData,
} from "iab-odin-angular-extensions-library";
import { MainRoutingModule } from "./main.routes";
import { SohoComponentsModule } from "ids-enterprise-ng";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { M3OdinModule } from "@infor-up/m3-odin-angular";

const appData: AppData = {
  title: "Application Template",
  name: "APT001",
  version: "0.3.0",
};

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SohoComponentsModule,
    M3OdinModule,
    IabOdinAngularExtensionsLibraryModule,
    MainRoutingModule,
  ],
  entryComponents: [],
  providers: [],
})
export class MainModule {
  static forRoot() {
    return {
      ngModule: MainModule,
      providers: [{ provide: APP_DATA, useValue: appData }, AuthorizationGuard],
    };
  }
}
