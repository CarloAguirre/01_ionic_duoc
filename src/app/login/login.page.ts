import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonItem, IonInput, IonInputPasswordToggle, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    CommonModule,
    FormsModule,
    IonItem,
    IonInput,
    IonInputPasswordToggle,
    IonButton
  ]
})
export class LoginPage{
  usuario = ''
  password = ''

  constructor(private router: Router, private alertCtrl: AlertController) {}

  async ingresar() {
    const usuario = String(this.usuario)
    const password = String(this.password)
    const usuarioValido = /^[a-zA-Z0-9]{3,8}$/.test(usuario)
    const passwordValida = /^[0-9]{4}$/.test(password)

    if (!usuarioValido || !passwordValida) {
      const alerta = await this.alertCtrl.create({
        header: 'Error',
        message: 'Verifica que el usuario tenga entre 3 y 8 caracteres alfanuméricos y que la contraseña sea numérica de 4 dígitos.',
        buttons: ['OK']
      })
      await alerta.present()
      return
    }

    this.router.navigate(['/home'], {
      state: { usuario: this.usuario }
    })
  }

}
