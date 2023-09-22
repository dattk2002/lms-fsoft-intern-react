import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AutoCompleteModule} from 'primeng/autocomplete';
import { FilterSyllabusService } from '../../service/filter-syllabus.service';

@Component({
  selector: 'app-create-training-program-general',
  templateUrl: './create-training-program-general.component.html',
  styleUrls: ['./create-training-program-general.component.scss'],
})
export class CreateTrainingProgramGeneralComponent {
  selectedTraining: any;
  filteredTrainings: any[]; 
  // @Input() smallTitle: string = 'Class';
  @Input() bigTitle: string = '';
  public nameForm!: FormGroup;
  public syllabusForm = new FormGroup({
    select: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private filterSyllabusService: FilterSyllabusService,
    ) {}
  ngOnInit() {}
  public createForm() {
    console.log(JSON.stringify(this.syllabusForm.value));
  }
  public Save() {
    this.router.navigate(['/training/create/syllabus'])
  }
  public Back() {
    this.router.navigate(['training/create'])
  } 
  filterCountry(event) {
    //this function to pass the inputted value (event.query) to query for the related values.
    console.log(event.query);
    this.filterSyllabusService.getFilteredSyllabus(event.query).subscribe(
      (response) => {
        console.log('Filtered Program');
        console.log(response);


        this.filteredTrainings = response;
      },
      (error) => {
        console.log('Filtered Program FAILED');
        console.log(error);
      }
    );
    
  }
}
