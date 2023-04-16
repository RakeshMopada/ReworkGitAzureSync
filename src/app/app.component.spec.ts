import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { SohoComponentsModule } from "ids-enterprise-ng";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { M3OdinModule } from "@infor-up/m3-odin-angular";
import { AppRoutingModule } from "./app-routing.module";
import { IabOdinAngularExtensionsLibraryModule } from "iab-odin-angular-extensions-library";
import { MainModule } from "./main/main.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        FormsModule,
        SohoComponentsModule,
        M3OdinModule,
        AppRoutingModule,
        IabOdinAngularExtensionsLibraryModule,
        MainModule.forRoot(),
      ],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
