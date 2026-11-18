import { Service } from '@angular/core';
export type worktype = 'LIVRO' | 'MANGA';
export type readingStatus = 'LIDO' | 'LENDO' | 'PARADO' | 'NÃO LIDO';

export interface ChronologicalItem {
  id: string;
  order: number;
  eraLabel: string; //indica o arco ou era que esta situado o livro/manga
  title: string;
  author: string;
  type: worktype;
  convertUrl: string;
  status: readingStatus;
}

@Service()
export class TimelineModel {}
