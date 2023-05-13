import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokedex } from '../Pokedex';


@Component({
  selector: 'app-Pokedex',
  templateUrl: './Pokedex.component.html',
  styleUrls: ['./Pokedex.component.css']
})
export class PokedexComponent implements OnInit {


  Pokedex: Pokedex = {} as Pokedex;

  constructor(private service: PokedexService) { }


  ngOnInit(): void {
    this.loadPokemon();
  }
  loadPokemon() {
    this.service.getPokemon().subscribe({
      next: data => {
        this.Pokedex = data;
        this.Pokedex.img = data.sprites.other.home.front_default;
      }
    });
  }


  Id(): number {
    return this.service.Id;
  }

  Proximo() {
    this.service.Id++;
    this.loadPokemon();
  }

  Anterior() {
    this.service.Id--;
    this.loadPokemon();
  }

  Nome() : string {
    return this.Pokedex.name;
  }

  Altura() : number {
    return this.Pokedex.height;
  }

  Peso() : number {
    return this.Pokedex.weight;
  }


  Habilidade() : string {
    return this.Pokedex.abilities[0].ability.name;
  }

  Habilidade2(): string {
      return this.Pokedex.abilities[1].ability.name;
    }
  }

