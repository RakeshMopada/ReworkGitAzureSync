import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScreenGRecipecompareComponent } from "./screen-g-recipecompare.component";

describe("ScreenGRecipecompareComponent", () => {
  let component: ScreenGRecipecompareComponent;
  let fixture: ComponentFixture<ScreenGRecipecompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenGRecipecompareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenGRecipecompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
