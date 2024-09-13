import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { TableComponent } from "./components/table/table.component";
import { CardComponent } from "./components/card/card.component";
import { ChartComponent } from "./components/chart/chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , TableComponent, CardComponent, ChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ticket';
}
