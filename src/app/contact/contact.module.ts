import { NgModule } from '@angular/core';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule,
    ShareButtonsModule,
  ],
  declarations: [
    ContactComponent,
  ]
})
export class ContactModule { }
