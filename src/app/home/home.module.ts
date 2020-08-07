import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [SharedModule, HomeRoutingModule, MaterialModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
