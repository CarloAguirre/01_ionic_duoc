import { Component } from '@angular/core';
import {
  IonContent, IonHeader, IonItem, IonInput, IonButton, IonToolbar, IonTitle, IonSelectOption
} from '@ionic/angular/standalone'
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
    MatSliderModule,
    IonContent,
    IonHeader,
    IonItem,
    IonInput,
    IonButton,
    IonToolbar,
    IonTitle,
    FormsModule,
    CommonModule,
    IonSelectOption
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
  }

  async mostrar() {
    const alert = await this.alertCtrl.create({
      header: 'Datos ingresados',
      message: `Nombre: ${this.nombre}<br>Apellido: ${this.apellido}`,
      buttons: ['OK']
    })
    await alert.present()
  }
}
