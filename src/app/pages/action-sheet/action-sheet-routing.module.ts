import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetPage } from './action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetPage,
    children: [
      {
        path: 'alert',
        loadChildren: '../alert/alert.module#AlertPageModule'
      },
      {
        path: 'inicio',
        loadChildren: '../inicio/inicio.module#InicioPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetPageRoutingModule {}
