import { Component } from '@angular/core';
import { projects } from './utils';

@Component({
  selector: 'app-practical-experience',
  templateUrl: './practical-experience.component.html',
  styleUrls: ['./practical-experience.component.scss'],
})
export class PracticalExperienceComponent {
  showContent = true;
  projects = projects;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
