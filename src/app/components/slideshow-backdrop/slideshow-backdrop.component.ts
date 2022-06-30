import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() peliculas:Pelicula[] = [];

  options = {
    slidesPerView:1.3,
    freeMode:true
  }
  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  async verDetalle(id:number){
    const modal = await this.modalController.create({
      component:DetalleComponent,
      componentProps:{
        id
      }
    })
    modal.present();
  }

}
