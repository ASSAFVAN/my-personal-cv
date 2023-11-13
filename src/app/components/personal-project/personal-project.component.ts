import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-project',
  templateUrl: './personal-project.component.html',
  styleUrls: ['./personal-project.component.scss'],
})
export class PersonalProjectComponent {
  @Input() description: string = '';
  @Input() selected: boolean = false;
  @Input() stack: string[] = [];
  @Input() demo: string = '';
}
