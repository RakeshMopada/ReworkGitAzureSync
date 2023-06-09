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
interface ILstEXT1104 {
  PMFACI: string;
  PMMTNO: string;
  PMPRNO: string;
  PMSTRT: string;
  MMITDS: string;
  V_LOG3: string;
  VRVRSN: string;
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
  public LstEXT1104(): Promise<ILstEXT1104[]> {
    const parameters: IMIParameter[] = [
      { name: "PMFACI", value: "NN1" },
      { name: "PMMTNO", value: "10004156" },
    ];
    return this.miService
      .executeList<ILstEXT1104>("CMS100MI", "Lst_EXT11_04", parameters)
      .toPromise();
  }
}
