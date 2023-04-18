import { Component, OnInit, ViewChild } from "@angular/core";
import { SohoDataGridComponent } from "ids-enterprise-ng";

@Component({
  selector: "app-screen-f-compselect",
  templateUrl: "./screen-f-compselect.component.html",
  styleUrls: ["./screen-f-compselect.component.css"],
})
export class ScreenFCompselectComponent implements OnInit {
  gridOptions: SohoDataGridOptions;
  @ViewChild("placeholderDataGrid") datagrid: SohoDataGridComponent;
  private grid: SohoDataGridComponent;
  constructor() {}

  ngOnInit(): void {
    this.buildGridOptions();
    this.loadDataGrid();
  }
  private buildGridOptions(): void {
    this.gridOptions = {
      selectable: "multiple",
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
        width: 25,
        name: "Sel",
        id: "sel",
        field: "sel",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "Seq",
        id: "seq",
        field: "seq",
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
        name: "Qty",
        id: "qty",
        field: "qty",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "UM",
        id: "um",
        field: "um",
        align: "center",
        sortable: true,
        searchable: true,
      },
    ];
  }
  async loadDataGrid(): Promise<void> {
    try {
      // const temp = await this.apiService.LstEXT1104();
      // this.datagrid
      //   ? (this.datagrid.dataset = temp)
      //   : (this.gridOptions.dataset = temp);
      // this.isBusy = false;
    } catch (err) {
      throw err;
    }
  }
}
