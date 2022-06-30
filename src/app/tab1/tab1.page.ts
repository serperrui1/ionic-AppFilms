import { Component, OnInit } from '@angular/core';
import { Pelicula} from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];

  constructor(private moviesService:MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getFeature().subscribe(res=>{
      this.peliculasRecientes = res.results;
    })
    this.getPopulares();
    
  }

  cargarMas(){
    this.getPopulares();

  }


  getPopulares(){
    this.moviesService.getPopulares().subscribe(res=>{
      this.populares= [...this.populares, ...res.results]
    })
  }
}
