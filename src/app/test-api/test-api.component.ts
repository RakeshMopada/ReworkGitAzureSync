import { Component, OnInit, ViewChild } from "@angular/core";
import { SohoDataGridComponent } from "ids-enterprise-ng";
import { TestAPIService } from "./test-api.service";

@Component({
  selector: "app-test-api",
  templateUrl: "./test-api.component.html",
  styleUrls: ["./test-api.component.css"],
})
export class TestApiComponent implements OnInit {
  usid: string;
  usname: string;
  @ViewChild("grid", { static: true })
  private grid: SohoDataGridComponent;

  constructor(private apiService: TestAPIService) {}

  ngOnInit(): void {
    this.getUserId();
  }
  async getUserId(): Promise<void> {
    try {
      const temp = await this.apiService.getUserId();
      const newArr = temp[0];
      this.usid = newArr["USID"];
      this.usname = newArr["NAME"];
    } catch (err) {
      throw err;
    }
  }
}
