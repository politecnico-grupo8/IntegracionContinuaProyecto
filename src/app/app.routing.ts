import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule  } from "@angular/router";

import { PeopleComponent } from './components/people/people.component';


const appRoutes: Routes = [
    {path: '', component: PeopleComponent},
    {path: 'people', component: PeopleComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
