import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [SharedModule, SkillsRoutingModule, CommonModule, MaterialModule],
  declarations: [SkillsComponent],
})
export class SkillsModule {}
