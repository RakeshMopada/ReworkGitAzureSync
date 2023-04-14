import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScreenJReworkrecipeComponent } from "./screen-j-reworkrecipe.component";

describe("ScreenJReworkrecipeComponent", () => {
  let component: ScreenJReworkrecipeComponent;
  let fixture: ComponentFixture<ScreenJReworkrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenJReworkrecipeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenJReworkrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
