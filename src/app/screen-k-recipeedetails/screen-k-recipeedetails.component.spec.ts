import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScreenKRecipeedetailsComponent } from "./screen-k-recipeedetails.component";

describe("ScreenKRecipeedetailsComponent", () => {
  let component: ScreenKRecipeedetailsComponent;
  let fixture: ComponentFixture<ScreenKRecipeedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenKRecipeedetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenKRecipeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
