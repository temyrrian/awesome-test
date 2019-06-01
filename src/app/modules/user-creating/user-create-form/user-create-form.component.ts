import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormGroupDirective,
    Validators,
} from '@angular/forms';

import { ApiService } from '../../../core/services/api.service';

@Component({
    selector: 'app-user-create-form',
    templateUrl: './user-create-form.component.html',
    styleUrls: ['./user-create-form.component.scss'],
})
export class UserCreateFormComponent implements OnInit {
    userForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private service: ApiService
    ) {}

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            name: new FormControl(
                '',
                Validators.compose([Validators.required])
            ),
            email: new FormControl(
                '',
                Validators.compose([Validators.required, Validators.email])
            ),
            phone: new FormControl(
                '',
                Validators.compose([Validators.required])
            ),
            birthday: new FormControl(
                '',
                Validators.compose([Validators.required])
            ),
        });
    }

    onSubmit(formDirective: FormGroupDirective) {
        this.service.saveUser(this.userForm.value).subscribe(() => {
            formDirective.resetForm();
            this.userForm.reset();
        });
    }
}
