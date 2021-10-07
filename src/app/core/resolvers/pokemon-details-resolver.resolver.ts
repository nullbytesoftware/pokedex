import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonDetails } from '../models/pokemon.details';
import { PokemonService } from '../services/pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailsResolver implements Resolve<PokemonDetails> {
  constructor(private pokemonService: PokemonService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PokemonDetails> | Promise<PokemonDetails> {
  
    return this.pokemonService.fetchPokemonDetails(route.params.name);
  }
}
