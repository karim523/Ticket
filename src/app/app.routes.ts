import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
  { path: 'your-path', component: CardComponent },
  { path: '**', redirectTo: 'your-path' }
];
