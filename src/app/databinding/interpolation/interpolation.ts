import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  position: string;
  department?: string;
  details?: {
    role?: string;
  };
}

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css'
})
export class Interpolation {
  studentName: string = 'Mia The Baddie Builder';
  courseCode: string = 'APPDEV1';
  courseYear: number = new Date().getFullYear();
  roles = ['Admin', 'Editor', 'Viewer'];
  text: string = "{{expression}}";
  curly: string = "{{}}";
  common: string = "{{userName}}";
  methods: string = "{{getStatus()}}";
  dotnot: string = "{{ user.name }}";
  dotnot2: string = "{{ user?.profile?.email }}";
  jpipe: string = "{{ user | json }}";
  isActive: boolean = false;

  user: User = {
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'IT Department',
    details: {
      role: 'Admin'
    }
  };

  age: number = 19;
  course: string = 'BSIT';
  today: Date = new Date();
  isEnrolled: boolean = true;

  // Added missing properties
  title: string = 'Angular Interpolation';
  currentYear: number = new Date().getFullYear();
  skills: string[] = ['TypeScript', 'Angular', 'HTML', 'CSS'];

  selectedCountryId: number = 1;
  countries = [
    { id: 1, name: 'Philippines' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Japan' },
  ];

  // Added missing method
  getWelcomeMessage(): string {
    return `Welcome, ${this.user.name}!`;
  }
}