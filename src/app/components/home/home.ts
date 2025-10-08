import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Header, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit{
  isAdmin = false;

  productObj: any ={
    photo:'',
    name:'',
    description:'',
    price:''
  }

  productList: any =[];

  constructor(private route: ActivatedRoute) {
    const userType = this.route.snapshot.paramMap.get('userType');
    if (userType === 'admin') {
      this.isAdmin = true;
    }
  }

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
