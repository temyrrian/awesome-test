import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateFormComponent } from './user-create-form/user-create-form.component';
import {CoreModule} from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [UserCreateFormComponent]
})
export class UserCreatinModule { }
