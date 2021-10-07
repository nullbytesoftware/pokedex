import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonDetails } from 'src/app/core/models/pokemon.details';

@Component({
  selector: 'app-pokemon-details-page',
  templateUrl: './pokemon-details-page.component.html',
  styleUrls: ['./pokemon-details-page.component.scss'],
})
export class PokemonDetailsPageComponent implements OnInit, OnDestroy {
  constructor(private activatedRoute: ActivatedRoute) {}

  pokemonDetails: PokemonDetails;
  sub: Subscription;

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.data.subscribe(
      (data) => (this.pokemonDetails = data.pokemonDetails)
    );
  }
}
