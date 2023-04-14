import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScreenBLotComponent } from "./screen-b-lot.component";

describe("ScreenBLotComponent", () => {
  let component: ScreenBLotComponent;
  let fixture: ComponentFixture<ScreenBLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenBLotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenBLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
