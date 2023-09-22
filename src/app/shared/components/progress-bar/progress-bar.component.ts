import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  providers: [MessageService]
})
export class ProgressBarComponent {
  title = 'Angular Search Using ng2-search-filter';
  searchText: any;
  value: number = 0;

  constructor(private messageService: MessageService) {}

  ngOnInit() {

      this.value = 25; //get from
      }


}
