import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Productos } from '../../services/productos';

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

  productoService = inject(Productos);

  // Tipo de usuario que está ingresando
  public userType: string = 'user';
  setUserType(type: string){
    this.userType = type;
  }

  // Logeo
  onLogin(){
    this.productoService.obtenerClientes().subscribe({
      next: (listaUsuarios) => {        
        let usuarioEncontrado = null;

        if (this.userType == 'admin') {
          usuarioEncontrado = listaUsuarios.find(user => 
            user.rol == 'admin' && 
            user.ID == this.loginObj.id && 
            user.Contraseña == this.loginObj.password
          );
        
        } else if (this.userType == 'user') {
          usuarioEncontrado = listaUsuarios.find(user =>
            user.rol == 'cliente' &&
            user.Correo == this.loginObj.correo &&
            user.Contraseña == this.loginObj.password
          );
        }

        if (usuarioEncontrado) {
          localStorage.setItem('userType', this.userType);
          localStorage.setItem('userData', JSON.stringify(usuarioEncontrado));
          this.router.navigate(['home', this.userType]);
        } else {
          alert("Credenciales incorrectas");
        }
      },
      error: () => {
        alert('No se pudo conectar al backend para verificar usuarios.');
      }
    });
  }

}
