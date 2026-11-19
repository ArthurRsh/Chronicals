import { Component } from '@angular/core';
import { MenuItem } from './menu-item/menu-item';

@Component({
  imports: [MenuItem],
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {}
