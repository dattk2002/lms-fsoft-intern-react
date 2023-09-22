import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FilterProgramService } from './services/filter-program.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-class-add-program',
  templateUrl: './create-class-add-program.component.html',
  styleUrls: ['./create-class-add-program.component.scss'],
})
export class CreateClassAddProgramComponent {
  selectedProgram!: any;
  filteredPrograms!: any[];
  myForm: FormGroup;
  tmpFilter = [
    {
      id: ' 123 ',
      program_name: ' C++ ',
      createdon: '9/2/2023',
      creaedby: 'hoangduy',
      duration: '7days',
      status: 'Active ',
    },
    {
      id: '456',
      program_name: 'Java',
      createdon: '10/2/2023',
      creaedby: 'johnsmith',
      duration: '14days',
      status: 'Active',
    },
    {
      id: '789',
      program_name: 'Python',
      createdon: '11/2/2023',
      creaedby: 'janedoe',
      duration: '30days',
      status: 'Inactive',
    },
  ];
  tmp = localStorage.getItem('className');
  className = this.tmp.substring(1, this.tmp.length - 1);
  trainingProgram = '';

  constructor(
    private filterProgramService: FilterProgramService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      selectedProgram: new FormControl('', Validators.required),
    });
  }

  filterCountry(event) {
    //this function to pass the inputted value (event.query) to query for the related values.
    console.log(event.query);
    this.filterProgramService.getFilteredPrograms(event.query).subscribe(
      (response) => {
        console.log('Filtered Program');
        console.log(response);
        this.filteredPrograms = response;
      },
      (error) => {
        console.log('Filtered Program FAILED');
        console.log(error);
      }
    );
  }

  submit() {
    console.log('Form submitted!');
    console.log(this.myForm.value);
    this.trainingProgram = this.myForm.value.selectedProgram.id;
    console.log(this.trainingProgram);
    localStorage.setItem('createClassTrainingProgramId', this.trainingProgram);

    this.router.navigate(['/class/create/add-info']);
  }
}
