import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private Productos: Productos) {
    const userType = this.route.snapshot.paramMap.get('userType');
    if (userType == 'admin') {
      this.isAdmin = true;
    }
  }

  // Función para recuperar los datos de los productos
  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {    
    this.Productos.obtenerProductos().subscribe({
      next: (data) => {
        // Cuando los datos lleguen, los asignamos a la variable local
        this.productos = data;
        console.log('Productos cargados desde el backend:', this.productos);
      },
      error: (err) => {
        // Manejo de error en caso de que el backend no responda
        console.error('Error al cargar productos:', err);
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