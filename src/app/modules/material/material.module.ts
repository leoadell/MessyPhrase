
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatMenuModule, MatProgressSpinnerModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,    
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule
  ],
})
export class CustomMaterialModule { }