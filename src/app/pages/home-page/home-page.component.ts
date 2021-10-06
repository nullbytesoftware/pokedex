import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonListItem } from 'src/app/core/models/pokemon.item';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(public apiService: ApiService) {}

  pokemons: PokemonListItem[];

  ngOnInit(): void {
    this.apiService
      .get('pokemon', {
        offset: 20,
        limit: 20,
      })
      .subscribe((data) => {
        this.pokemons = data.results;
      });
  }
}
