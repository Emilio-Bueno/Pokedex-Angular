import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokedex } from '../Pokedex';


@Component({
  selector: 'app-Pokedex',
  templateUrl: './Pokedex.component.html',
  styleUrls: ['./Pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  poke: Pokedex = {} as Pokedex;

  constructor(private service: PokedexService) { }


  ngOnInit(): void {
    this.loadPoke();
  }

  loadPoke(): void {
    this.service.getPokemon().subscribe(
      {
        next: data => this.poke = data
      }
    );
  }


  getId(): number {
    return this.service.Id;
  }

  nextPoke() {
    this.service.Id++;
    this.loadPoke();
    this.idSelecionado = 0;
  }

  prevPoke() {
    this.service.Id--;
    this.loadPoke();
    this.idSelecionado = 0;
  }

  getName() : string {
    return this.poke.name;
  }

  getAltura() : number {
    return this.poke.height;
  }

  getPeso() : number {
    return this.poke.weight;
  }


  getHabilidade() : string {
    return this.poke.abilities[0].ability.name;
  }

  getHabilidade2(): string {
    if (this.poke.abilities[1].ability.name === '') {
      return "Sem habilidade secundária";
    }

    else {
      return this.poke.abilities[1].ability.name;
    }

  }

  idSelecionado : number = 0;

  buscarId(){
    if (this.idSelecionado == 0 || this.idSelecionado > 1010){
      this.idSelecionado = 0;
    }

    else{
      this.service.Id = this.idSelecionado;
      this.loadPoke();
    }
  }
}