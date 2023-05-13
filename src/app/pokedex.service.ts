import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from './Pokedex';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http : HttpClient) { }

  public Id : number = 1;

  getPokemon() : Observable<Pokedex> {
    return this.http.get<Pokedex>("https://pokeapi.co/api/v2/pokemon/"+ this.Id)
  }

}