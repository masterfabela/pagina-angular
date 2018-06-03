import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'pa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ahora = this.obtenerMomentoActual();
  manhan = this.obtenerDiaManhana();

  /**
   * Funcion que obtiene el dia actual
   * @returns Fecha Actual formateada
   */
  obtenerMomentoActual() {
    return moment().format();
  }

  /**
   * Funcion que obtiene el dia de manhana
   * @returns Dia de manhana formateado
   */
  obtenerDiaManhana(){
    return moment().add(1,"days").format();
  }

  constructor() {}
  ngOnInit() {}
}
