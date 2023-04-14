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
@Injectable({
  providedIn: "root",
})
export class ScreenAService {
  private userContext: IUserContext;

  constructor(
    private userService: UserService,
    private miService: MIExtendedService
  ) {
    this.userService.getUserContext().subscribe((context) => {
      this.userContext = context;
    });
  }

  //   public getUserId(): Promise<IUserId[]> {
  //     const parameters: IMIParameter[] = [];
  //     return this.miService
  //       .executeList<IUserId>("MNS150MI", "GetUserData", parameters)
  //       .toPromise();
  //   }
}
