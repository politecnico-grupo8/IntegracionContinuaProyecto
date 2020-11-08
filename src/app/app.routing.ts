import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule  } from "@angular/router";

import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';

const appRoutes: Routes = [
    {path: '', component: PeopleComponent},
    {path: 'people', component: PeopleComponent},
    {path: 'planets', component: PlanetsComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
