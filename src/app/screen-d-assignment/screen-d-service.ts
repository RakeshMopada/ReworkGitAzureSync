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
interface ILstEXTRWA {
  CONO: string;
  FACI: string;
  ITNO: string;
  BANO: string;
  PRNO: string;
  STRT: string;
  VRSN: string;
  TRQA: string;
  ALQT: string;
  TRQP: string;
  NOTE: string;
}
@Injectable({
  providedIn: "root",
})
export class ScreenDService {
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
  public LstEXTRWA(): Promise<ILstEXTRWA[]> {
    const parameters: IMIParameter[] = [
      { name: "CONO", value: "100" },
      { name: "FACI", value: "NN1" },
      { name: "ITNO", value: "10003473" },
      { name: "BANO", value: "RW0000054535-1" },
    ];
    return this.miService
      .executeList<ILstEXTRWA>("EXT002MI", "LstRWA", parameters)
      .toPromise();
  }
}
