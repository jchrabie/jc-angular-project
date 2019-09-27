import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatChipsModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatMenuModule,
  MatTooltipModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatMenuModule
  ],
})
export class MaterialModule { }
