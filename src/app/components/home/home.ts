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

  productos: Iisproductos [] = [];

  productObj: any ={
    photo:'',
    name:'',
    description:'',
    price:''
  }

  productList: any =[];

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
    this.productos = this.Productos.obtenerProductos();

    var data = localStorage.getItem('product');
    if (data) {
      this.productList = JSON.parse(data);
    }
  }

  
  // Función para guardar productos
  onSaveRecord(){
    this.productList.push(this.productObj);
    localStorage.setItem('product', JSON.stringify(this.productList));
    console.log(this.productList);

    this.productObj = {
      photo: '',
      name: '',
      description: '',
      price: ''
    };
  }

  // Función para borrar producto
  onDeleteRecord(index: number) {
    this.productList.splice(index, 1);
    
    localStorage.setItem('product', JSON.stringify(this.productList));
  }

}
