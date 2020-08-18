import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LegalRoutingModule } from './legal-routing.module';
import { LegalComponent } from './legal.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [SharedModule, LegalRoutingModule, MaterialModule],
  declarations: [LegalComponent],
})
export class LegalModule {}
