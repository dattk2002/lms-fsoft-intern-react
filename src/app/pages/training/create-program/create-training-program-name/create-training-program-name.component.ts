import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-training-program-name',
  templateUrl: './create-training-program-name.component.html',
  styleUrls: ['./create-training-program-name.component.scss']
})
export class CreateTrainingProgramNameComponent {
  bigTitle = '';
  // public nameForm!: FormGroup;
  public profileForm = new FormGroup({
    search : new FormControl(''),
  });
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {}
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  public createSearch() {
    localStorage.setItem(
      'createSearch',
      JSON.stringify(this.profileForm.value)
    );
    console.log(JSON.stringify(this.profileForm.value));
    this.router.navigate(['/training/create/general'])
  }
}
