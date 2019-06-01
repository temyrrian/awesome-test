import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTableComponent } from './user-table/user-table.component';
import { CoreModule } from '../../core/core.module';
import { UrlSortService } from '../../core/services';

@NgModule({
    imports: [CommonModule, CoreModule],
    providers: [UrlSortService],
    declarations: [UserTableComponent],
})
export class UsersTableModule {}
