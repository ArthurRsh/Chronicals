import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  standalone: true,
  selector: 'app-menu-item',
  styleUrl: './menu-item.css',
  templateUrl: './menu-item.html',
})
export class MenuItem {
  readonly label = input.required<string>();
  readonly rota = input.required<string>();
}
