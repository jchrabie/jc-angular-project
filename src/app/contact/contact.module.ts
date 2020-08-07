import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [SharedModule, ContactRoutingModule, MaterialModule],
  declarations: [ContactComponent],
})
export class ContactModule {}
