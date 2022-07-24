import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css'],
})
export class ResponsesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private apiService: ApiService
  ) {}
  formId!: string;
  loading: boolean = false;
  errorMessage = '';
  formName: string = '';
  responses: any = [];
  ngOnInit(): void {
    this.formId = this.route.snapshot.params['formId'];
    this.getResponses(this.formId);
    this.showDialog();
  }
  showDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.formId;
    this.matDialog.open(DialogComponent, dialogConfig);
  }
  deleteDialog(action: string) {
    console.log(action);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { formId: this.formId, action: action };
    let dialogRef = this.matDialog.open(ConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res.data);
      if (res.data.isSuccess) {
        this.getResponses(this.formId);
      }
    });
  }
  getResponses(formId: string) {
    this.loading = true;
    this.apiService.getResponses(formId).subscribe(
      (data: any) => {
        this.responses = data.responses;
        this.formName = data.formName;
        console.log(data);
        this.loading = false;
      },
      (error: any) => {
        this.loading = false;
        this.errorMessage = error.error.message;
      }
    );
  }
}
