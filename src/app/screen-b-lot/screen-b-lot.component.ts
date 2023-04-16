import { Component, OnInit, ViewChild } from "@angular/core";
import { ScreenBService } from "./screen-b-service";
import { SohoDataGridComponent } from "ids-enterprise-ng";
import { ScreenAService } from "../screen-a-overview/screen-a-service";

@Component({
  selector: "app-screen-b-lot",
  templateUrl: "./screen-b-lot.component.html",
  styleUrls: ["./screen-b-lot.component.css"],
})
export class ScreenBLotComponent implements OnInit {
  company: string;
  facility: string;
  arrWarehouse = [];
  @ViewChild("grid", { static: true })
  private grid: SohoDataGridComponent;
  constructor(
    private apiService: ScreenBService,
    private screenAService: ScreenAService
  ) {}

  ngOnInit(): void {
    console.log("inside screen b ts");
    this.getDetailsFromScreenA();
  }

  getDetailsFromScreenA() {
    this.company = this.screenAService.companyService;
    this.facility = this.screenAService.facilityService;
    console.log("CMP frm A: " + this.company);
    console.log("FACILITY frm A: " + this.facility);
    this.loadWarehouses();
  }

  async loadWarehouses(): Promise<void> {
    try {
      const temp = await this.apiService.getWarehouses(
        this.company,
        this.facility
      );
      console.log("Response from Get warehouse");
      for (let i = 0; i < temp.length; i++) {
        const tempArr = temp[i];
        this.arrWarehouse.push(tempArr["WHLO"]);
      }
      console.log(this.arrWarehouse);
    } catch (err) {
      throw err;
    }
  }
}
