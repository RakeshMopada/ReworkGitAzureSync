import { Component, OnInit, ViewChild } from "@angular/core";
import { SohoDataGridComponent } from "ids-enterprise-ng";
import { ScreenDService } from "./screen-d-service";

@Component({
  selector: "app-screen-d-assignment",
  templateUrl: "./screen-d-assignment.component.html",
  styleUrls: ["./screen-d-assignment.component.css"],
})
export class ScreenDAssignmentComponent implements OnInit {
  gridOptions: SohoDataGridOptions;
  @ViewChild("placeholderDataGrid") datagrid: SohoDataGridComponent;
  private grid: SohoDataGridComponent;
  isBusy = true;
  constructor(private apiService: ScreenDService) {}

  ngOnInit(): void {
    this.buildGridOptions();
    this.loadDataGrid();
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
        name: "Product",
        id: "PRNO",
        field: "PRNO",
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
        name: "Assigned Qty",
        id: "TRQA",
        field: "TRQA",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "Allocated Qty",
        id: "ALQT",
        field: "ALQT",
        align: "center",
        sortable: true,
        searchable: true,
      },
    ];
  }
  async loadDataGrid(): Promise<void> {
    try {
      const temp = await this.apiService.LstEXTRWA();
      this.datagrid
        ? (this.datagrid.dataset = temp)
        : (this.gridOptions.dataset = temp);
      this.isBusy = false;
    } catch (err) {
      throw err;
    }
  }
}
