import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatTabsModule } from '@angular/material/tabs';

// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// Material Popups & Modals
import { MatListModule } from '@angular/material/list';
// Material Data tables
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
const MaterialComponents = [
  MatListModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatDividerModule,
  MatToolbarModule,
  MatRadioModule,
  MatCardModule,
  MatExpansionModule,
  MatTabsModule,
  MatButtonModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTableModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
