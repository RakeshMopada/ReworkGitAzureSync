import { Component, OnInit, ViewChild } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { ScreenBLotComponent } from "../screen-b-lot/screen-b-lot.component";
import { SohoDataGridComponent } from "ids-enterprise-ng";
@Component({
  selector: "app-screen-a-overview",
  templateUrl: "./screen-a-overview.component.html",
  styleUrls: ["./screen-a-overview.component.css"],
})
export class ScreenAOverviewComponent implements OnInit {
  arr = [];
  @ViewChild("grid", { static: true })
  private grid: SohoDataGridComponent;
  constructor() {}

  ngOnInit(): void {}
}
