import { Injectable } from '@angular/core';
import { Iisproductos } from '../models/is.Model';

@Injectable({
  providedIn: 'root'
})
export class Productos {
  private productos: Iisproductos[] = [
    {
      photo: '/recursos/Gorra Jordan Rise.jpg',
      name: 'Gorra',
      description: 'Gorra Jordan Rise Negra',
      price: 1500,
      sport: ['Running', 'Futbol']
    },
    {
      photo: 'recursos/Jersey Chelsea FC alternativo 2025-26 Match.jpg',
      name: 'Jersey',
      description: 'Jersey Chelsea FC Negra',
      price: 2000,
      sport: ['Running', 'Futbol']
    },
    {
      photo: 'recursos/Jersey Tottenham Hotspur alternativo 2025-26 Match.jpg',
      name: 'Jersey',
      description: 'Jersey Tottenham Hotspur Amarilla',
      price: 2000,
      sport: ['Running', 'Futbol']
    },
    {
      photo: 'recursos/Jordan Everyday.jpg',
      name: 'Calcetines',
      description: 'Calcetines Jordan Negros',
      price: 500,
      sport: ['Running', 'Futbol']
    },
    {
      photo: 'recursos/Cartera Jordan.jpg',
      name: 'Cartera',
      description: 'Cartera Joran Negra',
      price: 800,
      sport: ['Running', 'Futbol']
    }
  ];

  obtenerProductos(): Iisproductos[]{
    return this.productos;
  }

}
