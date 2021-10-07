import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { empty, of, throwError } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  finalize,
  switchMap,
  tap,
} from 'rxjs/operators';
import { PokemonDetails } from 'src/app/core/models/pokemon.details';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  searchControl: FormControl;
  overlayVisible = false;
  pokemon: PokemonDetails | undefined;
  loading = false;

  ngOnInit(): void {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => (this.loading = true)),
        switchMap((text: string) => {
          if (!text.trim()) return of(undefined);
          else
            return this.pokemonService.fetchPokemonDetails(
              text.trim().toLowerCase()
            );
        }),
        tap(() => (this.loading = false)),
        catchError((err) => {
          this.loading = false;
          console.log(err);
          return of(undefined);
        })
      )
      .subscribe((pokemon: PokemonDetails | undefined) => {
        console.log(pokemon);

        this.pokemon = pokemon;
      });
  }

  get currentSearchValue(): string {
    return this.searchControl.value;
  }
}
