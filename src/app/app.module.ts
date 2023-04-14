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
import { ScreenAOverviewComponent } from "./screen-a-overview/screen-a-overview.component";
import { ScreenBLotComponent } from "./screen-b-lot/screen-b-lot.component";
import { ScreenCDetailsComponent } from './screen-c-details/screen-c-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent,
    ScreenAOverviewComponent,
    ScreenBLotComponent,
    ScreenCDetailsComponent,
  ],
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
