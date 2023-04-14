import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScreenHAssgndetailsComponent } from "./screen-h-assgndetails.component";

describe("ScreenHAssgndetailsComponent", () => {
  let component: ScreenHAssgndetailsComponent;
  let fixture: ComponentFixture<ScreenHAssgndetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenHAssgndetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenHAssgndetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
