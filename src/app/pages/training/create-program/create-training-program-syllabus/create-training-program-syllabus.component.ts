import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CreateTrainingProgramSyllabusService } from '../../service/create-training-program-syllabus.service';
@Component({
  selector: 'app-create-training-program-syllabus',
  templateUrl: './create-training-program-syllabus.component.html',
  styleUrls: ['./create-training-program-syllabus.component.scss']
})
export class CreateTrainingProgramSyllabusComponent {
  @Input() bigTitle: string = '';
  sourceSyllabus: any[];
  public profileForm = new FormGroup({
    select : new FormControl(''),
  });
  public createSearch() {
    console.log(JSON.stringify(this.profileForm.value));
  }
  public Back2() {
    this.router.navigate(['/training/create/general'])
  }
  constructor(private formBuilder: FormBuilder, private router: Router, private createTraningProgam: CreateTrainingProgramSyllabusService) {}
 
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  ngOnInit() {
    this.createTraningProgam.getprogram().subscribe(
      (response) => {
        console.log('success');
        console.log(response);
        console.log(response.data.result);
        
        this.sourceSyllabus = response.data.result;
      },
      (error) => {
        console.log('fail');
        console.log(error);
      }
    );
    
  }
}