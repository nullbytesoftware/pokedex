import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from 'src/app/core/models/pokemon.details';

@Component({
  selector: 'app-pokemon-details-page',
  templateUrl: './pokemon-details-page.component.html',
  styleUrls: ['./pokemon-details-page.component.scss'],
})
export class PokemonDetailsPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  pokemonDetails: PokemonDetails;

  ngOnInit(): void {
    this.pokemonDetails = this.activatedRoute.snapshot.data.pokemonDetails;
  }
}
