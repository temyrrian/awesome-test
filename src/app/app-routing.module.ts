import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { TableComponent } from './modules/users-table/user-table/table.component';
import {UserCreateFormComponent} from './modules/user-creating/user-create-form/user-create-form.component';
import {UsersTableModule} from './modules/users-table/users-table.module';
import {UserCreatinModule} from './modules/user-creating/user-creatin.module';



const routes: Routes = [
  { path: '', redirectTo: 'users-list', pathMatch: 'full' },
  { path: 'users-list', component: TableComponent },
  { path: 'users-create', component: UserCreateFormComponent },
];

const pageModules = [
  UsersTableModule,
  UserCreatinModule
];

@NgModule({
  imports: [
    ...pageModules,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
