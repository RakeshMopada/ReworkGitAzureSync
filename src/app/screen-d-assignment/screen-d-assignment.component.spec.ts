import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScreenDAssignmentComponent } from "./screen-d-assignment.component";

describe("ScreenDAssignmentComponent", () => {
  let component: ScreenDAssignmentComponent;
  let fixture: ComponentFixture<ScreenDAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenDAssignmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenDAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
