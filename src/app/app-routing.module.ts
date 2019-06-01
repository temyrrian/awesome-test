import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { UserTableComponent } from './modules/users-table/user-table/user-table.component';
import {UserCreateFormComponent} from './modules/user-creating/user-create-form/user-create-form.component';
import {UsersTableModule} from './modules/users-table/users-table.module';
import {UserCreatingModule} from './modules/user-creating/user-creating.module';
import {UsersResolver} from './core/resolvers';



const routes: Routes = [
  { path: '', redirectTo: 'users-list', pathMatch: 'full' },
  {
    path: 'users-list',
    component: UserTableComponent,
    resolve: {
      users: UsersResolver
    }
  },
  { path: 'users-create', component: UserCreateFormComponent },
];

const pageModules = [
  UsersTableModule,
  UserCreatingModule
];

@NgModule({
  imports: [
    ...pageModules,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  providers: [ UsersResolver ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
