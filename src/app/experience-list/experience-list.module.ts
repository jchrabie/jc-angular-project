import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExperienceListRoutingModule } from './experience-list-routing.module';
import { ExperienceListComponent } from './experience-list.component';
import { ExperienceComponent } from './experience/experience.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [SharedModule, ExperienceListRoutingModule, MaterialModule],
  declarations: [ExperienceListComponent, ExperienceComponent],
})
export class ExperienceListModule {}
