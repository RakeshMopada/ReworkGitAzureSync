import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  AuthorizationGuard,
  UnauthorizedComponent,
} from "iab-odin-angular-extensions-library";

const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full",
    canActivate: [AuthorizationGuard],
  },
  { path: "unauthorized", component: UnauthorizedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
