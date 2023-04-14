import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  AuthorizationGuard,
  UnauthorizedComponent,
} from "iab-odin-angular-extensions-library";
import { ScreenAOverviewComponent } from "./screen-a-overview/screen-a-overview.component";
import { ScreenBLotComponent } from "./screen-b-lot/screen-b-lot.component";
import { ScreenCDetailsComponent } from "./screen-c-details/screen-c-details.component";
import { ScreenDAssignmentComponent } from "./screen-d-assignment/screen-d-assignment.component";
import { ScreenESelectionComponent } from "./screen-e-selection/screen-e-selection.component";
import { ScreenFCompselectComponent } from "./screen-f-compselect/screen-f-compselect.component";
import { ScreenGRecipecompareComponent } from "./screen-g-recipecompare/screen-g-recipecompare.component";
import { ScreenHAssgndetailsComponent } from "./screen-h-assgndetails/screen-h-assgndetails.component";
import { ScreenJReworkrecipeComponent } from "./screen-j-reworkrecipe/screen-j-reworkrecipe.component";
import { ScreenKRecipeedetailsComponent } from "./screen-k-recipeedetails/screen-k-recipeedetails.component";
import { ScreenLDisposalComponent } from "./screen-l-disposal/screen-l-disposal.component";

// const routes: Routes = [
//   {
//     path: "",
//     redirectTo: "main",
//     pathMatch: "full",
//     canActivate: [AuthorizationGuard],
//   },
//   { path: "unauthorized", component: UnauthorizedComponent },
// ];

const routes: Routes = [
  { path: "app-screen-a-overview", component: ScreenAOverviewComponent },

  { path: "", redirectTo: "/app-screen-a-overview", pathMatch: "full" },
  { path: "app-screen-b-lot", component: ScreenBLotComponent },
  { path: "app-screen-c-details", component: ScreenCDetailsComponent },
  { path: "app-screen-d-assignment", component: ScreenDAssignmentComponent },
  { path: "app-screen-e-selection", component: ScreenESelectionComponent },
  { path: "app-screen-f-compselect", component: ScreenFCompselectComponent },
  {
    path: "app-screen-g-recipecompare",
    component: ScreenGRecipecompareComponent,
  },
  {
    path: "app-screen-h-assgndetails",
    component: ScreenHAssgndetailsComponent,
  },
  {
    path: "app-screen-j-reworkrecipe",
    component: ScreenJReworkrecipeComponent,
  },
  {
    path: "app-screen-k-recipeedetails",
    component: ScreenKRecipeedetailsComponent,
  },
  { path: "app-screen-l-disposal", component: ScreenLDisposalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
