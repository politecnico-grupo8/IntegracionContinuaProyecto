import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule  } from "@angular/router";

import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';

const appRoutes: Routes = [
    {path: '', component: PeopleComponent},
    {path: 'people', component: PeopleComponent},
    {path: 'planets', component: PlanetsComponent},
    {path: 'species', component: SpeciesComponent},
    {path: 'species', component: SpeciesComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
