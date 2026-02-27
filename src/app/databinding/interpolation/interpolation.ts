import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css'
})
export class Interpolation {
  studentName: string = 'Mia The Baddie Builder';
  courseCode: string = 'APPDEV1'
  courseYear: number = new Date().getFullYear();
  roles = ['Admin', 'Editor', 'Viewer'];
  text: string = "{{expression}}"
  curly:string ="{{}}"
  common: string ="{{userName}}"
  methods: string ="{{getStatus() }}"
  dotnot: string="{{ user.name }}"
  dotnot2: string="{{ user?.profile?.email }}"
  jpipe: string ="{{ user | json }}"
  isActive: boolean = false;

  user: User = {
    name: 'John Doe',
    position: 'Software Engineer'
  }
  age: number = 19;
  course: string = 'BSIT';
  today: Date = new Date();
  isEnrolled: boolean = true;
}