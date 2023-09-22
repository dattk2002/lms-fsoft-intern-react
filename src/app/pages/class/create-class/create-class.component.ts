import { Component } from '@angular/core';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss'],
})
export class CreateClassComponent {
  tmp: string = localStorage.getItem('className');
  className = '';
  ngOnInit() {
    if (this.tmp != '') {
      this.className = this.tmp.substring(1, this.tmp.length - 1);
    }
  }
}
