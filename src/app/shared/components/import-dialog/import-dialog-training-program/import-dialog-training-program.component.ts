import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-import-dialog-training-program',
  templateUrl: './import-dialog-training-program.component.html',
  styleUrls: ['./import-dialog-training-program.component.scss']
})
export class ImportDialogTrainingProgramComponent {
  public importForm = new FormGroup({
    select: new FormControl(''),
  });
  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {}
  ngOnInit() {}
  public createForm() {
    console.log(JSON.stringify(this.importForm.value));
  }
  onSubmit() {}
  uploadedFiles: any[] = [];

    

    onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}
