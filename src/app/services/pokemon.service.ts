import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  //Función que hace la petición a la API externa
  getPokemon () {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/2/');
  }

  getPokemon2 (id: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokedex/${id}`);
  }

  getPokemonByName (name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

}
