import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { M3OdinModule } from "@infor-up/m3-odin-angular";
import { AppRoutingModule } from "./app-routing.module";
import { SohoComponentsModule } from "ids-enterprise-ng";
import {
  IabOdinAngularExtensionsLibraryModule,
  MIExtendedService,
} from "iab-odin-angular-extensions-library";
import { AppComponent } from "./app.component";
import { MainModule } from "./main/main.module";
import { TestApiComponent } from "./test-api/test-api.component";
import { TestAPIService } from "./test-api/test-api.service";

@NgModule({
  declarations: [AppComponent, TestApiComponent],
  imports: [
    BrowserModule,
    FormsModule,
    SohoComponentsModule,
    M3OdinModule,
    AppRoutingModule,
    IabOdinAngularExtensionsLibraryModule,
    MainModule.forRoot(),
  ],
  providers: [MIExtendedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
