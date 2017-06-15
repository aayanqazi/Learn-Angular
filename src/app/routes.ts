import {DirectoryComponent} from "./directory/directory.component";
import {HomeComponent} from "./home/home.component";
import {provideRoutes} from "@angular/router";
export const APP_ROUTES = [
    {path:'',component:HomeComponent},
    {path:'directory/:id',component:DirectoryComponent}
];

export const APP_ROUTE_PROVIDER = (provideRoutes(APP_ROUTES));