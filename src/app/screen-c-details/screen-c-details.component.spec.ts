import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScreenCDetailsComponent } from "./screen-c-details.component";

describe("ScreenCDetailsComponent", () => {
  let component: ScreenCDetailsComponent;
  let fixture: ComponentFixture<ScreenCDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenCDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenCDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
