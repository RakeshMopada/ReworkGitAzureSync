import { Component, OnInit, ViewChild } from "@angular/core";
import { SohoDataGridComponent } from "ids-enterprise-ng";

@Component({
  selector: "app-screen-g-recipecompare",
  templateUrl: "./screen-g-recipecompare.component.html",
  styleUrls: ["./screen-g-recipecompare.component.css"],
})
export class ScreenGRecipecompareComponent implements OnInit {
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
        name: "Recept 1%",
        id: "recept1",
        field: "recept1",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "Recept 2%",
        id: "recept2",
        field: "recept2",
        align: "center",
        sortable: true,
        searchable: true,
      },
      {
        width: 50,
        name: "Difference %",
        id: "difference",
        field: "difference",
        align: "center",
        sortable: true,
        searchable: true,
      },
    ];
  }
  async loadDataGrid(): Promise<void> {
    try {
      //   const temp = await this.apiService.LstEXT1104();
      //   this.datagrid
      //     ? (this.datagrid.dataset = temp)
      //     : (this.gridOptions.dataset = temp);
      //   this.isBusy = false;
    } catch (err) {
      throw err;
    }
  }
}
