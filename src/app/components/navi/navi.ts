import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navi.html',
  styleUrl: './navi.css'
})
export class Navi {
  appTitle: string = 'MidtermApp';
  version: string = '1.0';
  currentDate: Date = new Date();

  navLinks = [
    { label: 'Home',         path: '/'        },
    { label: 'Data Binding', path: '/binding' }
  ];
}