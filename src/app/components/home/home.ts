import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Iisproductos } from '../../models/is.Model';
import { Productos } from '../../services/productos';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Header, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit{

  productos: any [] = [];

  productObj: any ={
    photo:'',
    name:'',
    description:'',
    price:''
  }

  // Comprobar el usuario con el que se ingresó
  isAdmin = false;
  constructor(private route: ActivatedRoute, private Productos: Productos, private router: Router) {
    const userType = this.route.snapshot.paramMap.get('userType');
    if (userType == 'admin') {
      this.isAdmin = true;
    }

    this.verificarSesion();
  }

  verificarSesion() {
    const sesionActiva = localStorage.getItem('userType');

    if (!sesionActiva) {
      this.router.navigate(['/login']);
      return; // Detenemos la ejecución aquí
    }

    if (sesionActiva === 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  // Función para recuperar los datos de los productos
  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {    
    this.Productos.obtenerProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: () => {
        alert('No se pudo conectar al backend.');
      }
    });
  }

  
  // Función para guardar productos
  onSaveRecord(){
    this.productObj = {
      photo: '',
      name: '',
      description: '',
      price: ''
    };
  }

  // Función para borrar producto
  onDeleteRecord(index: number) {
    
  }

}