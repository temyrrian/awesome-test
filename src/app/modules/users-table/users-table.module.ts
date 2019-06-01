import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './user-table/table.component';
import {CoreModule} from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [TableComponent]
})
export class UsersTableModule { }
