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
interface IFacility {
  cono: string;
  FACI: string;
  FACN: string;
}

interface ILstEXT11 {
  MLFACI: string;
  MLWHLO: string;
  MLITNO: string;
  MMITDS: string;
  MLBANO: string;
  MLSTQT: string;
}
@Injectable({
  providedIn: "root",
})
export class ScreenBService {
  private userContext: IUserContext;

  constructor(
    private userService: UserService,
    private miService: MIExtendedService
  ) {
    this.userService.getUserContext().subscribe((context) => {
      this.userContext = context;
    });
  }

  public getWarehouses(cono: any, faci: any): Promise<IUserId[]> {
    const parameters: IMIParameter[] = [
      { name: "CONO", value: cono },
      { name: "FACI", value: faci, filterType: FilterType.Post },
    ];
    return this.miService
      .executeList<IUserId>("MMS005MI", "LstWarehouses", parameters)
      .toPromise();
  }
  public LstEXT11(): Promise<ILstEXT11[]> {
    const parameters: IMIParameter[] = [{ name: "MLFACI", value: "NN1" }];
    return this.miService
      .executeList<ILstEXT11>("CMS100MI", "Lst_EXT11_01", parameters)
      .toPromise();
  }
}
