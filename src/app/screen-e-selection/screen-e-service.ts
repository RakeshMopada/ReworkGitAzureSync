import { Injectable } from "@angular/core";
import { IUserContext } from "@infor-up/m3-odin";
import { UserService } from "@infor-up/m3-odin-angular";
import {
  FilterType,
  IMIParameter,
  MIExtendedService,
} from "iab-odin-angular-extensions-library";

interface IUserId {
  usid: string;
}

interface IProductGroup {
  ITCL: string;
  TX40: string;
}

@Injectable({
  providedIn: "root",
})
export class ScreenEService {
  private userContext: IUserContext;

  constructor(
    private userService: UserService,
    private miService: MIExtendedService
  ) {
    this.userService.getUserContext().subscribe((context) => {
      this.userContext = context;
    });
  }

  public getProductGroup(): Promise<IProductGroup[]> {
    const parameters: IMIParameter[] = [];
    return this.miService
      .executeList<IProductGroup>("CRS035MI", "LstProductGroup", parameters)
      .toPromise();
  }
}
