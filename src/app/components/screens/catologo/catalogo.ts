import { Component } from '@angular/core';
import { Menu } from '../../shared/menu/menu';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
  imports: [Menu, RouterOutlet],
})
export class Catalogo {}
