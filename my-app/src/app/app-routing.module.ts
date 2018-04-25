import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'items',
    loadChildren: 'app/items/items.module#ItemsModule' // lazy loading de la route
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true // <-- debugging purposes only
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
