import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  productObj={
    photo:'',
    name:'',
    description:'',
    price:''
  }

  productList: any =[];

  onSaveRecord(){
    this.productList.push(this.productObj);
    localStorage.setItem('product', JSON.stringify(this.productList));
    console.log(this.productList);
  }
}
