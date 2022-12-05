import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { CrudComponent } from './crud.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { RenderTruePipe } from './pipes/render-true.pipe';

@NgModule({
  declarations: [CrudComponent, FormComponent, TableComponent, RenderTruePipe],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [],
})
export class CrudModule {}
