import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../menu/menu';

@Component({
  standalone: true,
  selector: 'app-pages',
  templateUrl: './pages.html',
  styleUrl: './pages.css',
  imports: [RouterOutlet, Menu],
})
export class Pages {}
