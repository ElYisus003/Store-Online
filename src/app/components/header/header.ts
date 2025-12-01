import { Component, inject } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { Router } from '@angular/router';

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
  // public headerIcons: string[] = ['<i class="bi bi-heart"></i>', '<i class="bi bi-bag-check-fill"></i>', '<i class="bi bi-box-arrow-in-right"></i>'];
  public headerIcons: { html: string, accion: string }[] = [
    { html: '<i class="bi bi-heart"></i>', accion: 'favorites' },
    { html: '<i class="bi bi-bag-check-fill"></i>', accion: 'cart' },
    { html: '<i class="bi bi-box-arrow-in-right"></i>', accion: 'logout' }
  ];

  articleObj = {
    photo: '',
    name: '',
    description: '',
    clasification: '',
    price: ''
  }

  articleList : any = [];

  router = inject(Router);

  ejecutarAccion(accion: string) {
    if (accion == 'logout') {
      this.logOut();
    }
  }

  logOut() {
    localStorage.removeItem('userType');
    localStorage.removeItem('userData');

    this.router.navigate(['/login']);
  }

}
