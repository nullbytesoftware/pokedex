import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, delay, finalize, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PokemonDetails } from '../models/pokemon.details';
import { PokemonsResponse } from '../models/pokemon.item';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private apiService: ApiService) {}

  fetchPokemons(pageIndex: number = 0): Observable<PokemonsResponse> {
    return this.apiService
      .get<PokemonsResponse>('pokemon', {
        offset: pageIndex * 20,
        limit: 20,
      })
      .pipe(delay(500));
  }

  fetchPokemonDetails(name: string): Observable<PokemonDetails | undefined> {
    return this.apiService.get<PokemonDetails>(`pokemon/${name}`).pipe(
      catchError((err) => {
        console.log(err);
        return of(undefined);
      })
    );
  }
}
