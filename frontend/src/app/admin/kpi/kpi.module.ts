import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KPIRoutingModule } from './kpi-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KPIComponent } from './kpi.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { KpiListComponent } from './kpi-list/kpi-list.component';
import { KpiFormComponent } from './kpi-form/kpi-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    KPIComponent,
    KpiListComponent,
    KpiFormComponent
  ],
  imports: [
    CommonModule,
    KPIRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSelectModule
  ]
})
export class KPIModule { }
