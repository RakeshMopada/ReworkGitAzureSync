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
}
