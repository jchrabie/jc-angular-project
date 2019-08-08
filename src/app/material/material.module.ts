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
  MatMenuModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatAutocompleteModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,
    MatTooltipModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
})
export class MaterialModule { }
