import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-syllabus-outline',
  templateUrl: './create-syllabus-outline.component.html',
  styleUrls: ['./create-syllabus-outline.component.scss']
})
export class CreateSyllabusOutlineComponent {
  checked: boolean = false;
  syllabusOutLine: FormGroup;
  peers: string[] = ['H4SD'];
  tyles: string[] = ['Assignment/Lab','Concept/Lecture','Guide/Review','Test/Quiz'];


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.syllabusOutLine = this.fb.group({
      employees: this.fb.array([])
    });
  }

  employees(): FormArray {
    return this.syllabusOutLine.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([])
    });
  }

  addEmployee() {
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray {
    return this.employees()
      .at(empIndex)
      .get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: ''
    });
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.syllabusOutLine.value);
    return null
  }
}
