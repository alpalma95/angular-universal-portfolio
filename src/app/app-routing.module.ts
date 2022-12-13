import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { DisplayHide } from './display-hide/display-hide.component';
import { CommunicationComponent } from './communication/communication.component';
import { CrudComponent } from './crud/crud.component';
import { CounterAppComponent } from './counter/counter.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: { animation: 'home' },
  },
  {
    path: 'display-hide',
    component: DisplayHide,
    data: { animation: 'project' },
  },
  {
    path: 'communication',
    component: CommunicationComponent,
    data: { animation: 'project' },
  },
  {
    path: 'crud',
    component: CrudComponent,
    data: { animation: 'project' },
  },
  {
    path: 'counter',
    component: CounterAppComponent,
    data: { animation: 'project' },
  },
  {
    path: 'secret',
    loadChildren: () =>
      import('./secret/secret.module').then((m) => m.SecretModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
