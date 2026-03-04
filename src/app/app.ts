import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navi } from './comps/navi/navi';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'midtermApp';
}
