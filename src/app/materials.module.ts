import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule,
  MatDialogModule, MatSortModule, MatPaginatorModule, MatSnackBarModule,
   MatSidenavModule,
   MatDividerModule,
   MatToolbarModule,
   MatMenuModule,
   MatListModule,
   MatCardModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
const Material = [
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatSortModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatDividerModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatCardModule

];

@NgModule({
  imports: [Material],
  exports: [Material]

})
export class MaterialsModule { }
