import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizationGuard } from "iab-odin-angular-extensions-library";
const routes: Routes = [
  {
    path: "main",
    component: MainComponent,
    canActivate: [AuthorizationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
