import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScreenLDisposalComponent } from "./screen-l-disposal.component";

describe("ScreenLDisposalComponent", () => {
  let component: ScreenLDisposalComponent;
  let fixture: ComponentFixture<ScreenLDisposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenLDisposalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenLDisposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
