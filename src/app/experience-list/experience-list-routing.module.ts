import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceListComponent } from './experience-list.component';

const routes: Routes = [
  {
    path: 'experiences',
    component: ExperienceListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceListRoutingModule {}
