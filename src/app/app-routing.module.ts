import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { DiretivesComponent } from './components/diretives/diretives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'list/:id', component: ItemDetailComponent },
  { path: 'listAnimal/:id', component: ItemDetailComponent },

  { path: 'diretives', component: DiretivesComponent },
  { path: 'emitter', component: EmitterComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
