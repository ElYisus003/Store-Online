import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgForOf, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  public headerOptions: { name: string, subOptions: string[] }[] = [
    { name: 'Lo Nuevo', subOptions: ['Novedades', 'Lanzamientos', 'Tendencias'] },
    { name: 'Hombre', subOptions: ['Calzado', 'Ropa', 'Accesorios'] },
    { name: 'Mujer', subOptions: ['Calzado', 'Ropa', 'Accesorios'] },
    { name: 'Niño/a', subOptions: ['Niños', 'Adolescentes'] },
    { name: 'Ofertas', subOptions: ['Descuentos', 'Promociones Especiales'] },
    { name: 'SNKRS', subOptions: ['Lanzamientos Exclusivos', 'Colecciones'] }
  ]
  public headerIcons: string[] = ['<i class="bi bi-heart"></i>', '<i class="bi bi-bag-check-fill"></i>', '<i class="bi bi-box-arrow-in-right"></i>'];

  articleObj = {
    photo: '',
    name: '',
    description: '',
    clasification: '',
    price: ''
  }

  articleList : any = [];

}
