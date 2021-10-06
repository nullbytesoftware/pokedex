import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { delay, finalize, map, switchMap } from 'rxjs/operators';
import { PokemonList } from 'src/app/core/models/pokemon.item';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(public apiService: ApiService) {}

  pokemons: PokemonList;
  sub: Subscription;
  loading: boolean = false;
  currentPageIndex = new BehaviorSubject<number>(0);

  ngOnInit(): void {
    this.sub = this.currentPageIndex
      .pipe(switchMap((pageIndex) => this.fetchPokemons(pageIndex)))
      .subscribe((data) => {
        window.scroll(0,0);
        this.pokemons = data;
      });
  }

  onPageIndexChanged(newIndex: number) {
    this.currentPageIndex.next(newIndex);
  }

  fetchPokemons(pageIndex: number): Observable<PokemonList> {
    this.loading = true;
    return this.apiService
      .get<PokemonList>('pokemon', {
        offset: pageIndex * 20,
        limit: 20,
      })
      .pipe(
        delay(500),
        finalize(() => {
          this.loading = false;
        })
      );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
