import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Header, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit{
  productObj: any ={
    photo:'',
    name:'',
    description:'',
    price:''
  }

  productList: any =[];
  userType: any;

  ngOnInit(): void {
    var data = localStorage.getItem('product');
    if (data) {
      this.productList = JSON.parse(data);
    }
  }
  
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

  onDeleteRecord(index: number) {
    this.productList.splice(index, 1);
    
    localStorage.setItem('product', JSON.stringify(this.productList));
  }

}
