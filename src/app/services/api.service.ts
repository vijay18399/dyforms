import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '../models/form.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Main api url to call api
  url = 'https://dyforms-api.herokuapp.com';
  // url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  // To Create/Add New Form
  addForm(form: Form) {
    return this.http.post(`${this.url}/form`, form);
  }
  getForm(formId: string) {
    return this.http.get(`${this.url}/form/${formId}`);
  }
  // To Create/Add New Form
  postResponse(response: Response, formId: string) {
    return this.http.post(`${this.url}/response/${formId}`, response);
  }
  // To Create/Add New Form
  getResponses(formId: string) {
    return this.http.get(`${this.url}/responses/${formId}`);
  }

  deleteResponse(responseId: string) {
    return this.http.delete(`${this.url}/response/${responseId}`);
  }
  deleteResponses(formId: string) {
    return this.http.delete(`${this.url}/responses/${formId}`);
  }
}
