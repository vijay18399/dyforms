import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ApiService } from '../services/api.service';
import * as _ from 'lodash';

import { Router } from '@angular/router';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  ngOnInit(): void {}
  editName = false;
  loading: Boolean = false;
  form = this.fb.group({
    name: ['Untitled Form', Validators.required],
    fields: this.fb.array([]),
  });

  constructor(
    public apiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  editFormName() {
    this.editName = !this.editName;
  }
  get fields() {
    return this.form.controls['fields'] as FormArray;
  }

  addField() {
    const fieldForm = this.fb.group({
      label: ['', Validators.required],
      data_type: ['RADIO', Validators.required],
      fieldOptions: this.fb.array([]),
    });
    this.fields.push(fieldForm);
    this.addfieldOption(this.fields.length - 1);
  }
  copyField(fieldIndex: number) {
    let field = _.cloneDeep(this.fields.at(fieldIndex));
    this.fields.push(field);
  }
  deleteField(fieldIndex: number) {
    this.fields.removeAt(fieldIndex);
  }
  fieldOptions(fieldIndex: number): FormArray {
    return this.fields.at(fieldIndex).get('fieldOptions') as FormArray;
  }

  newfieldOption(): FormGroup {
    return this.fb.group({
      label: ['', Validators.required],
    });
  }
  addfieldOption(fieldIndex: number) {
    this.fieldOptions(fieldIndex).push(this.newfieldOption());
  }
  removefieldOption(fieldIndex: number, optionIndex: number) {
    this.fieldOptions(fieldIndex).removeAt(optionIndex);
  }
  submit() {
    this.apiService.addForm(this.form.value).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['responses', data.formId]);
    });
  }
  onFieldTypeChange(fieldIndex: number, event: any) {
    console.log(event.target.value);
    if (event.target.value == 'RADIO') {
      this.fieldOptions(fieldIndex).push(this.newfieldOption());
    } else {
      this.fieldOptions(fieldIndex).clear();
    }
  }
}
