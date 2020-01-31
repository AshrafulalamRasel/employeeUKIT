import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RegistrationComponent} from "./registration/registration.component";





const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    children: [
      {path: '', component: RegistrationComponent, pathMatch: 'full'}
    ]
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {
}

