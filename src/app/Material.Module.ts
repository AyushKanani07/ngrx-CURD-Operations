import { NgModule } from "@angular/core";
import { CommonModule, NgFor, NgIf, NgSwitch } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        CommonModule, NgFor, NgIf, NgSwitch, RouterLink, RouterOutlet, ReactiveFormsModule, FormsModule, HttpClientModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule, MatCheckboxModule, MatRadioModule, MatTableModule, MatSortModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatToolbarModule, MatMenuModule, MatIconModule
      ],
      exports: [
        CommonModule, NgFor, NgIf, NgSwitch, RouterLink, RouterOutlet, ReactiveFormsModule, FormsModule, HttpClientModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule, MatCheckboxModule, MatRadioModule, MatTableModule, MatSortModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatToolbarModule, MatMenuModule, MatIconModule
      ]
})

export class MaterialModule{}