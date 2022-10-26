import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunityRoutingModule } from './opportunity-routing.module';
import { OpportunityFormComponent } from './opportunity-form/opportunity-form.component';


@NgModule({
  declarations: [
    OpportunityFormComponent
  ],
  imports: [
    CommonModule,
    OpportunityRoutingModule
  ]
})
export class OpportunityModule { }
