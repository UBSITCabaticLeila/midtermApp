import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './property.html',
  styleUrl: './property.css',
})
export class Property {
  isButtonDisabled: boolean = true;
  imageSource: string = 'Asset 2SITLOGO1.png';
  imageAlt: string = 'SIT Logo';
  imageWidth: number = 80;
  linkUrl: string = 'https://www.ubaguio.edu/';
  inputPlaceholder: string = 'Type your name here...';
  clickCount: number = 0;
  inputName: string = '';
  onButtonClick(): void { this.clickCount++; this.isButtonDisabled = false; }
}