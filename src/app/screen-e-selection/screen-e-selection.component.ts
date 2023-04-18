import { Component, OnInit, ViewChild } from "@angular/core";
import { ScreenEService } from "./screen-e-service";
import { SohoDataGridComponent } from "ids-enterprise-ng";

@Component({
  selector: "app-screen-e-selection",
  templateUrl: "./screen-e-selection.component.html",
  styleUrls: ["./screen-e-selection.component.css"],
})
export class ScreenESelectionComponent implements OnInit {
  gridOptions: SohoDataGridOptions;
  isBusy = true;
  arrProductGroup = [];
  @ViewChild("placeholderDataGrid") datagrid: SohoDataGridComponent;
  constructor(private apiService: ScreenEService) {}

  ngOnInit(): void {
    this.loadProductGroup();
    this.buildGridOptions();
    this.loadDataGrid();
  }

  private buildGridOptions(): void {
    this.gridOptions = {
      selectable: "single",
      clickToSelect: true,
      paging: true,
      pagesize: 10,
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
        name: "Product",
        id: "PMPRNO",
        field: "PMPRNO",
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
        name: "Match Qty",
        id: "matchqty",
        field: "matchqty",
        align: "center",
        sortable: true,
        searchable: true,
      },
    ];
  }

  async loadProductGroup() {
    try {
      const temp = await this.apiService.getProductGroup();
      for (let i = 0; i < temp.length; i++) {
        let tempString = "";
        tempString = temp[i].ITCL + " - " + temp[i].TX40;
        this.arrProductGroup.push(tempString);
      }
      console.log(this.arrProductGroup);
      this.isBusy = false;
    } catch (err) {
      throw err;
    }
  }
  async loadDataGrid(): Promise<void> {
    try {
      const temp = await this.apiService.LstEXT1104();
      this.datagrid
        ? (this.datagrid.dataset = temp)
        : (this.gridOptions.dataset = temp);
      this.isBusy = false;
    } catch (err) {
      throw err;
    }
  }
}
