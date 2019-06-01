import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../../core/core.module';
import { UserCreateFormComponent } from './user-create-form/user-create-form.component';
import { ApiService } from '../../core/services/api.service';

@NgModule({
    imports: [CommonModule, CoreModule, ReactiveFormsModule],
    providers: [ApiService],
    declarations: [UserCreateFormComponent],
})
export class UserCreatingModule {}
