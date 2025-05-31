import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'

import localeEs from '@angular/common/locales/es'

import { registerLocaleData } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    MatSliderModule,
    CommonModule
  ],

})
export class AppComponent {
  constructor() {}
}
