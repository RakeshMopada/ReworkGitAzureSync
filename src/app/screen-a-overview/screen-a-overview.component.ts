import { Component, OnInit, ViewChild } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { ScreenBLotComponent } from "../screen-b-lot/screen-b-lot.component";
import { ScreenAService } from "./screen-a-service";
import { SohoDataGridComponent } from "ids-enterprise-ng";
@Component({
  selector: "app-screen-a-overview",
  templateUrl: "./screen-a-overview.component.html",
  styleUrls: ["./screen-a-overview.component.css"],
})
export class ScreenAOverviewComponent implements OnInit {
  @ViewChild("grid", { static: true })
  private grid: SohoDataGridComponent;
  constructor(private apiService: ScreenAService) {}

  ngOnInit(): void {}
}
