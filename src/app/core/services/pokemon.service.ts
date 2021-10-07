import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay, finalize, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PokemonDetails } from '../models/pokemon.details';
import { PokemonList } from '../models/pokemon.item';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private apiService: ApiService) {}

  fetchPokemons(pageIndex: number = 0): Observable<PokemonList> {
    return this.apiService
      .get<PokemonList>('pokemon', {
        offset: pageIndex * 20,
        limit: 20,
      })
      .pipe(delay(500));
  }

  fetchPokemonDetails(name: string): Observable<PokemonDetails> {
    return this.apiService.get<PokemonDetails>(`pokemon/${name}`);
  }
}
