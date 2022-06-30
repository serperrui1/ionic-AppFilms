import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculas:Pelicula[] = [];
  @Output() cargar = new EventEmitter();

  options = {
    slidesPerView:2.5,
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

    modal.onDidDismiss().then( async () => {
      this.cargar.emit()
    });
  }

  
}
