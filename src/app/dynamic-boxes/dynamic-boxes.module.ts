import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicBoxesComponent } from './dynamic-boxes/dynamic-boxes.component';
import { MatCardModule, MatIconModule, MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [DynamicBoxesComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [DynamicBoxesComponent]
})
export class DynamicBoxesModule { }
