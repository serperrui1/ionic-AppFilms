import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  pelicula: PeliculaDetalle ;
  actores: Cast[]= []
  @Input() id:number
  oculto = 150;
  estrella = 'star-outline';
  slideOptActores={
    slidesPerView:3.3,
    freeMode:true,
    spacebetween: -15
  }
  constructor(private moviesService:MoviesService,
              private modalController:ModalController,
              private dataLocalService: DataLocalService) { }

   ngOnInit() {

    this.dataLocalService.existePelicula(this.id).then( existe => this.estrella = ( existe ) ? 'star' : 'star-outline' );
    
    this.moviesService.getPeliculaDetalle(this.id).subscribe(res=>{
      this.pelicula= res;
    })
    this.moviesService.getActoresPelicula(this.id).subscribe(res=>{
      this.actores = res.cast;
    })
  }

  regresar(){
    this.modalController.dismiss();
  }

  favorito(){
    const existe = this.dataLocalService.guardarPelicula( this.pelicula );
    this.estrella = ( existe ) ? 'star' : 'star-outline';
  }
}
