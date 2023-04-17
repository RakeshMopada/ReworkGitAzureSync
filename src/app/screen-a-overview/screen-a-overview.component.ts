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
  gridOptions: SohoDataGridOptions;
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
    this.buildGridOptions();
  }

  private buildGridOptions(): void {
    this.gridOptions = {
      selectable: "single",
      clickToSelect: true,
      paging: true,
      rowHeight: "medium",
      cellNavigation: false,
      columns: this.buildGridColumns(),
      editable: true,
      alternateRowShading: true,
    };
  }

  private buildGridColumns(): SohoDataGridColumn[] {
    return [
      {
        width: 50,
        name: "Item",
        id: "item",
        field: "item",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 100,
        name: "Description",
        id: "description",
        field: "description",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "Lot Number",
        id: "lotnum",
        field: "lotnum",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "Status",
        id: "status",
        field: "lotnum",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "RW Method",
        id: "rwmethod",
        field: "rwmethod",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "OH Qty",
        id: "ohqty",
        field: "ohqty",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "Assigned Qty",
        id: "assignedqty",
        field: "assignedqty",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "Allocated Qty",
        id: "allocatedqty",
        field: "allocatedqty",
        align: "center",
        sortable: true,
        searchable: true,
      },
    ];
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
