import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChileComponent } from './components/chile/chile.component';
import { PeruComponent } from './components/peru/peru.component';
import { UruguayComponent } from './components/uruguay/uruguay.component';

const routes: Routes = [
  { path: 'peru', component: PeruComponent },
  { path: 'chile', component: ChileComponent },
  { path: 'uruguay', component: UruguayComponent },
  { path: '**', component: PeruComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
