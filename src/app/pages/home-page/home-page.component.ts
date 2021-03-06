import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { delay, finalize, map, switchMap, tap } from 'rxjs/operators';
import { PokemonsResponse } from 'src/app/core/models/pokemon.item';
import { ApiService } from 'src/app/core/services/api.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  pokemons: PokemonsResponse;
  sub: Subscription;
  loading: boolean = false;

  get currentPageIndex(): number {
    return this.pageToIndex(this.activeRoute.snapshot.queryParams.page);
  }

  pageToIndex(page: string | number): number {
    return +(page ?? 1) - 1;
  }
  
  ngOnInit(): void {
    this.sub = this.activeRoute.queryParams
      .pipe(
        tap(() => {
          this.loading = true;
        }),
        switchMap((qParams) => {
          return this.pokemonService.fetchPokemons(
            this.pageToIndex(qParams.page)
          );
        }),
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
    this.router.navigate([], {
      relativeTo: this.activeRoute,
      queryParams: {
        page: newIndex + 1,
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
