import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule  } from "@angular/router";

import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';

const appRoutes: Routes = [
    {path: '', component: PeopleComponent},
    {path: 'people', component: PeopleComponent},
    {path: 'planets', component: PlanetsComponent},
	  {path: 'species', component: SpeciesComponent},
    {path: 'starships', component: StarshipsComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
