import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScreenAOverviewComponent } from "./screen-a-overview.component";

describe("ScreenAOverviewComponent", () => {
  let component: ScreenAOverviewComponent;
  let fixture: ComponentFixture<ScreenAOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenAOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenAOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
