import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsResolver } from './core/resolvers/pokemon-details-resolver.resolver';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonDetailsPageComponent } from './pages/pokemon-details-page/pokemon-details-page/pokemon-details-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full',
  },
  {
    path: 'pokemons',
    component: HomePageComponent,
  },
  {
    path: 'pokemons/:name',
    component: PokemonDetailsPageComponent,
    resolve: {pokemonDetails: PokemonDetailsResolver}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
