import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Interpolation } from './interpolation/interpolation';
import { Property } from './property/property';
import { Event } from './event/event';
import { TwoWay } from './two-way/two-way';
import { Attribute } from './attribute/attribute';
import { Class } from './class/class';
import { Style } from './style/style';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [
    CommonModule,
    Interpolation,
    Property,
    Event,
    TwoWay,
    Attribute,
    Class,
    Style
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {}