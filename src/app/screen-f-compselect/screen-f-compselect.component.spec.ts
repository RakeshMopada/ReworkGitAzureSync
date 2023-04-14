import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScreenFCompselectComponent } from "./screen-f-compselect.component";

describe("ScreenFCompselectComponent", () => {
  let component: ScreenFCompselectComponent;
  let fixture: ComponentFixture<ScreenFCompselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFCompselectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenFCompselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
