import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-calendar',
  templateUrl: './training-calendar.component.html',
  styleUrls: ['./training-calendar.component.scss'],
  providers: [MessageService],
  styles: [
    `
      :host ::ng-deep .p-button {
        margin: 0 0.5rem 0 0;
        min-width: 10rem;
      }

      p {
        margin: 0;
      }

      .confirmation-content {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
        min-width: 6rem;
      }
    `,
  ],
})
export class TrainingCalendarComponent {
  public searchForm = new FormGroup({
    name: new FormControl(''),
  });
  searchText: any;
  name: string = 'Filter';
  name1: string = 'Day';
  name2: string = 'Week';
  value: number = 0;
  displayBasic: boolean | undefined;
  showFilterForm = false;
  stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];

    valueToggle: string = 'off';

  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) {}

  public filterForm!: FormGroup;

  public createName() {
    console.log(JSON.stringify(this.searchForm.value));
  }

  ngOnInit() {
    this.value = 25; //get from
    this.primengConfig.ripple = true;
  }

  toggleWeek() {
    this.router.navigate(['/calendar/week'])
  }
  toggleDay() {
    this.router.navigate(['/calendar/day'])
  }

  minDate = new Date('03/01/2023');
  maxDate = new Date('03/31/2023');

  selectDateRange(event: any) {
    console.log(event);
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  toggleFilterForm() {
    this.showFilterForm = !this.showFilterForm;
  }
  public onSubmit() {}

  onReset() {
    this.filterForm.reset();
  }

  openFilter() {
    // logic của hàm openFilter ở đây
  }
  changeStatus(product: any) {
    // code thực hiện thay đổi trạng thái của sản phẩm tại đây
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
  };
}
