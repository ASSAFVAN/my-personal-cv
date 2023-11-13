import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticalExperienceComponent } from './practical-experience.component';
import { PersonalProjectComponent } from 'src/app/components/personal-project/personal-project.component';

@NgModule({
  declarations: [PracticalExperienceComponent, PersonalProjectComponent],
  imports: [CommonModule],
  exports: [PracticalExperienceComponent],
})
export class PracticalExperienceModule {}
