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
  @ViewChild("grid", { static: true })
  private grid: SohoDataGridComponent;
  constructor(private apiService: ScreenEService) {}

  ngOnInit(): void {
    this.loadProductGroup();
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
}
