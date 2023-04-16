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
  isBusy = true;
  usid: string;
  usname: string;
  company: string;
  selectedFACI: string;
  arrFACI = [];
  arrFACN = [];
  arrFacilityDesc = [];

  @ViewChild("grid", { static: true })
  private grid: SohoDataGridComponent;
  constructor(private apiService: ScreenAService) {}

  ngOnInit(): void {
    this.getUserId();
  }

  faciltyClick(event: any) {
    console.log("Facility Selected: " + this.selectedFACI);
    // tslint:disable-next-line:no-magic-numbers
    this.apiService.setFacility(this.selectedFACI.substring(0, 3));
  }

  // Get the userdefaults - USID, Name, Company
  async getUserId(): Promise<void> {
    try {
      const temp = await this.apiService.getUserId();
      const newArr = temp[0];
      this.usid = newArr["USID"];
      this.usname = newArr["NAME"];
      this.company = newArr["CONO"];
      this.LstUserFaci(this.company);
      this.apiService.setCompany(this.company);
    } catch (err) {
      throw err;
    }
  }

  // Get user facility
  async LstUserFaci(comp: any): Promise<void> {
    try {
      const temp = await this.apiService.Lstfacility(comp);
      for (let i = 0; i < temp.length; i++) {
        this.arrFACI.push(temp[i].FACI);
        this.arrFACN.push(temp[i].FACN);
      }
      for (let i = 0; i < this.arrFACI.length; i++) {
        let combinedString = "";
        combinedString = this.arrFACI[i] + " - " + this.arrFACN[i];
        this.arrFacilityDesc.push(combinedString);
      }
      this.isBusy = false;
    } catch (err) {
      throw err;
    }
  }
}
