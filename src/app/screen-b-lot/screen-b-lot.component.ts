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
  gridOptions: SohoDataGridOptions;
  isBusy = true;
  company: string;
  facility: string;
  arrWarehouse = [];
  @ViewChild("placeholderDataGrid") datagrid: SohoDataGridComponent;
  constructor(
    private apiService: ScreenBService,
    private screenAService: ScreenAService
  ) {}

  ngOnInit(): void {
    this.getDetailsFromScreenA();
    this.buildGridOptions();
  }

  private buildGridOptions(): void {
    this.gridOptions = {
      selectable: "single",
      clickToSelect: true,
      paging: true,
      filterable: true,
      rowHeight: "medium",
      cellNavigation: false,
      columns: this.buildGridColumns(),
      editable: true,
      dataset: [],
      emptyMessage: { title: "No records available", icon: "empty-no-data" },
    };
  }

  private buildGridColumns(): SohoDataGridColumn[] {
    return [
      {
        width: 50,
        name: "Warehouse",
        id: "MLWHLO",
        field: "MLWHLO",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "Item",
        id: "MLITNO",
        field: "MLITNO",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 100,
        name: "Description",
        id: "MMITDS",
        field: "MMITDS",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "Lot Number",
        id: "MLBANO",
        field: "MLBANO",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "Qty Base UM",
        id: "qtybaseum",
        field: "qtybaseum",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "Qty KG",
        id: "qtykg",
        field: "qtykg",
        align: "center",
        sortable: true,
        searchable: true,
      },
    ];
  }

  getDetailsFromScreenA() {
    this.company = this.screenAService.companyService;
    this.facility = this.screenAService.facilityService;
    console.log("CMP frm A: " + this.company);
    console.log("FACILITY frm A: " + this.facility);
    this.loadWarehouses();
    this.loadDataGrid(this.facility);
  }
  async loadDataGrid(company: any): Promise<void> {
    try {
      const temp = await this.apiService.LstEXT11();
      this.datagrid
        ? (this.datagrid.dataset = temp)
        : (this.gridOptions.dataset = temp);
      this.isBusy = false;
    } catch (err) {
      throw err;
    }
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
      this.isBusy = false;
    } catch (err) {
      throw err;
    }
  }
}
