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
  @ViewChild("grid", { static: true })
  private grid: SohoDataGridComponent;
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
        name: "Warehouse",
        id: "warehouse",
        field: "warehouse",
        align: "center",
        sortable: true,
        searchable: true,
      },
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
