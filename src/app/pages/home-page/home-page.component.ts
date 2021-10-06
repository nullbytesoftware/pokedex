import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { delay, finalize, map, switchMap, tap } from 'rxjs/operators';
import { PokemonList } from 'src/app/core/models/pokemon.item';
import { ApiService } from 'src/app/core/services/api.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private pokemonService: PokemonService) {}

  pokemons: PokemonList;
  sub: Subscription;
  loading: boolean = false;
  currentPageIndex = new BehaviorSubject<number>(0);

  ngOnInit(): void {
    this.sub = this.currentPageIndex
      .pipe(
        tap(() => {
          this.loading = true;
        }),
        switchMap((pageIndex) => this.pokemonService.fetchPokemons(pageIndex)),
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe((data) => {
        window.scroll(0, 0);
        this.pokemons = data;
      });
  }

  onPageIndexChanged(newIndex: number) {
    this.currentPageIndex.next(newIndex);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
