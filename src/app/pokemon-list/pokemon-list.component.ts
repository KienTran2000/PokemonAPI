import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
pokemons: any[]=[];
page=1;
totalPokemons:number=0;

  constructor(
    private dataService:DataService
  ) { }
  ngOnInit(): void {
    this.getPokemons();
   }
   //Get Pokemon
   getPokemons(){
    this.dataService.getPokemons(10,this.page+0)
    .subscribe((response:any) => {
      this.totalPokemons=response.count;
      response.results.forEach((result: { name: string; }) => {
        this.dataService.getMoreData(result.name)
          .subscribe((uniResponse:any)=>{
            this.pokemons.push(uniResponse);
            console.log(this.pokemons);
          });
      })
    });
   }
}
