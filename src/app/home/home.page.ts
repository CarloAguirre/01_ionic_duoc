import { Component } from '@angular/core';
import {
  IonContent, IonHeader, IonItem, IonInput, IonButton, IonToolbar, IonTitle, IonSelectOption
} from '@ionic/angular/standalone'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatNativeDateModule } from '@angular/material/core'
import { MatInputModule } from '@angular/material/input'
import { MatSliderModule } from '@angular/material/slider'
import { AlertController } from '@ionic/angular'
import { CommonModule } from '@angular/common'
import {  LOCALE_ID } from '@angular/core'
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonItem,
    IonInput,
    IonButton,
    IonToolbar,
    IonTitle,
    IonSelectOption,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    CommonModule
  ],
    providers: [
    {provide: LOCALE_ID, useValue: 'es' }
  ]
})
export class HomePage {
  usuario = ''
  nombre = ''
  apellido = ''
  educacion = ''
  nacimiento = ''

  constructor(private router: Router, private alertCtrl: AlertController) {
    const navState = this.router.getCurrentNavigation()?.extras.state
    this.usuario = navState?.['usuario'] || ''
  }

limpiar() {
  this.nombre = ''
  this.apellido = ''
  this.educacion = ''
  this.nacimiento = ''

  const nombre = document.getElementById('campo-nombre')
  const apellido = document.getElementById('campo-apellido')

  nombre?.classList.remove('animar')
  apellido?.classList.remove('animar')

  setTimeout(() => {
    nombre?.classList.add('animar')
    apellido?.classList.add('animar')
  }, 10)
}

  async mostrar() {
    const alert = await this.alertCtrl.create({
      header: 'Datos ingresados',
      message: `Nombre: ${this.nombre}, Apellido: ${this.apellido}`,
      buttons: ['OK']
    })
    await alert.present()
  }


}
