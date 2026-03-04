import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title: string = 'Angular Data Binding';
  subtitle: string = 'Midterm Project';
  description: string = 'A complete demo of all Angular data binding types.';

  features = [
    { icon: '{{ }}', name: 'Interpolation',  desc: 'Render component values into the template.' },
    { icon: '[ ]',   name: 'Property',        desc: 'Bind data to DOM element properties.' },
    { icon: '( )',   name: 'Event',            desc: 'Listen to user events and trigger methods.' },
    { icon: '[()]',  name: 'Two-Way',          desc: 'Sync input and component data in real time.' },
    { icon: 'attr',  name: 'Attribute',        desc: 'Set HTML attributes with no DOM equivalent.' },
    { icon: 'cls',   name: 'Class',            desc: 'Dynamically add or remove CSS classes.' },
    { icon: 'sty',   name: 'Style',            desc: 'Set inline CSS styles from component data.' },
  ];

  // Added missing properties
  isButtonDisabled: boolean = false;
  imageSource: string = 'assets/angular.png';
  imageAlt: string = 'Angular Logo';
  imageWidth: number = 200;
  linkUrl: string = 'https://angular.dev';
  inputPlaceholder: string = 'Type something...';

  // Added missing method
  onButtonClick(): void {
    alert('Button clicked!');
  }
}