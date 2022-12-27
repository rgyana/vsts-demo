import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ComponentsModule } from './components/components.module';
import { TemplateComponent } from './template/template.component';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CommonModule,
    ComponentsModule
  ],
  exports : [TemplateComponent]
})
export class LayoutModule { }
