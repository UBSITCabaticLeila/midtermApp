import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation';
import { PropertyComponent } from './property/property';
import { EventComponent } from './event/event';
import { TwoWayComponent } from './two-way/two-way';
import { AttributeComponent } from './attribute/attribute';
import { ClassComponent } from './class/class';
import { StyleComponent } from './style/style';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [
    CommonModule,
    InterpolationComponent,
    PropertyComponent,
    EventComponent,
    TwoWayComponent,
    AttributeComponent,
    ClassComponent,
    StyleComponent
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {}