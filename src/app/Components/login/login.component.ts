import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='';
  password: string='';

  onSubmit(){
    if (this.username === 'usuario' && this.password === 'contraseña') {
      alert('Inicio de sesión exitoso');
    }else{
      alert('Inicio de sesión fallido. Verifica tus credenciales');
    }
  }
}
