import { Component, OnInit, ViewChild } from "@angular/core";
import { SohoDataGridComponent } from "ids-enterprise-ng";

@Component({
  selector: "app-screen-d-assignment",
  templateUrl: "./screen-d-assignment.component.html",
  styleUrls: ["./screen-d-assignment.component.css"],
})
export class ScreenDAssignmentComponent implements OnInit {
  gridOptions: SohoDataGridOptions;
  @ViewChild("grid", { static: true })
  private grid: SohoDataGridComponent;
  constructor() {}

  ngOnInit(): void {
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
        name: "Product",
        id: "product",
        field: "product",
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
}
