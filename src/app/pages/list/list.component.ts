import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 pokemons: any[] = [];

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Obtener el ID actualizado en tiempo real
      if (id) {
        this.loadPokemons(id);
      }
    });
  }
  loadPokemons(id: string): void {
    this.pokemonService.getPokemon(id).subscribe((data: any) => {
      this.pokemons = data.pokemon_entries;
      this.pokemons.forEach(pokemonEntry => {
        this.pokemonService.getPokemonByName(pokemonEntry.pokemon_species.name)
          .subscribe((pokemonDetail: any) => {
            pokemonEntry.sprite = pokemonDetail.sprites.front_default;
          });
      });
    });
  }
  }
