import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent implements OnInit {
  buttonText: string = '';
  loading = false;
  message = '  Are you Sure ?';
  isSuccess = false;
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiService: ApiService,
    private router: Router
  ) {}
  link = '';
  domain: string = '';
  errorMessage: string = '';
  ngOnInit(): void {
    if (this.data.action == 'all') {
      this.buttonText = 'Delete All Responses';
    } else {
      this.buttonText = 'Delete The Response';
    }
  }
  close() {
    this.dialogRef.close({ data: { isSuccess: this.isSuccess } });
  }
  navigate() {
    this.router.navigate(['responses', this.data.formId]);
  }
  deleteResponses() {
    let promise, route: string;
    if (this.data.action == 'all') {
      promise = this.apiService.deleteResponses(this.data.formId);
    } else {
      promise = this.apiService.deleteResponse(this.data.action);
    }
    promise.subscribe(
      (data: any) => {
        console.log(data);
        this.isSuccess = true;
        this.message = 'Deleted Successfully';
        this.loading = false;
      },
      (error: any) => {
        this.loading = false;
        this.errorMessage = error.error.message;
      }
    );
  }
}
