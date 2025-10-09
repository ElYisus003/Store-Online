import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginObj: any = {
    correo: '',
    password: '',
    id: ''
  }

  router=inject(Router);

  // Tipo de usuario que está ingresando
  public userType: string = 'user';
  setUserType(type: string){
    this.userType = type;
  }

  // Logeo
  onLogin(){
    if(this.loginObj.id=='admin123' && this.loginObj.password=='123'){
      this.router.navigate(['home', 'admin']);
    }
    else if(this.loginObj.correo=='user@prueba.com' && this.loginObj.password=='123'){
      this.router.navigate(['home', 'user']);
    }
    else{
      alert("wrong credentials");
    }
  }

}
