import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScreenESelectionComponent } from "./screen-e-selection.component";

describe("ScreenESelectionComponent", () => {
  let component: ScreenESelectionComponent;
  let fixture: ComponentFixture<ScreenESelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenESelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenESelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
