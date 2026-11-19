import { Component } from '@angular/core';
import { Menu } from '../../shared/menu/menu';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-autores',
  templateUrl: './autores.html',
  styleUrl: './autores.css',
  imports: [Menu, RouterOutlet],
})
export class Autores {}
