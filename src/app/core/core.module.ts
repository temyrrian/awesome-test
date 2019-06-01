import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';

const MATERIAL_MODULES = [
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ...MATERIAL_MODULES,
        RouterModule,
    ],
    exports: [HeaderComponent, HttpClientModule, ...MATERIAL_MODULES],
    declarations: [HeaderComponent],
})
export class CoreModule {}
