import { Component, Input, OnInit } from '@angular/core';
import { PokemonListItem } from 'src/app/core/models/pokemon.item';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss'],
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemonItem: PokemonListItem;

  constructor() {}

  ngOnInit(): void {}
}
