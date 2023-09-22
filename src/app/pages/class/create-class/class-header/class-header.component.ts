import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-class-header',
  templateUrl: './class-header.component.html',
  styleUrls: ['./class-header.component.scss'],
})
export class ClassHeaderComponent {
  classHeaderBtn: string = 'Planning';
  classHeaderBtnColor: string = '#b9b9b9';

  @Input() smallTitle: string = 'Class';
  @Input() bigTitle: string = 'Fresher Develop Operation';
}
