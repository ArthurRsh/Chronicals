import { Routes } from '@angular/router';
import { PaginaInicial } from './components/screens/pagina-inicial/pagina-inicial';
import { Autores } from './components/screens/autores/autores';
import { Catalogo } from './components/screens/catologo/catalogo';

export const routes: Routes = [
  {
    path: '',
    component: PaginaInicial,
  },
  {
    path: 'autores',
    component: Autores,
  },
  {
    path: 'catalogo',
    component: Catalogo,
  },
];
