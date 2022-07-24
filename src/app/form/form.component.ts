import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
  Form,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  errorMessage: string = '';
  message: string = '';
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
  formId!: string;
  form!: any;
  loading: boolean = false;
  formTemplate: any = {
    from: '',
    values: [],
  };
  ngOnInit(): void {
    this.formId = this.route.snapshot.params['formId'];
    this.getMovie(this.formId);
  }
  getMovie(movie_id: string) {
    this.loading = true;
    this.apiService.getForm(movie_id).subscribe(
      (data: any) => {
        console.log(data);
        this.loading = false;
        this.form = data.form;
        this.formTemplate.from = '';
        this.formTemplate.values = [];
        for (let field of data.form.fields) {
          this.formTemplate.values.push({
            label: field.label,
            value: '',
            fieldId: field.id,
            data_type: field.data_type,
            fieldOptions: field.fieldOptions,
          });
        }
      },
      (error: any) => {
        this.loading = false;
        this.errorMessage = error.error.message;
      }
    );
  }
  sendResponse() {
    this.loading = true;
    this.apiService.postResponse(this.formTemplate, this.formId).subscribe(
      (data: any) => {
        console.log(data);
        this.loading = false;
        this.message = 'Your response has been recorded.';
      },
      (error: any) => {
        this.loading = false;
        this.errorMessage = error.error.message;
      }
    );
  }
  sendAnother() {
    this.message = '';
    this.getMovie(this.formId);
  }
}
