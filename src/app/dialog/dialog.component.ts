import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClipboardService } from 'ngx-clipboard';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clipboardApi: ClipboardService
  ) {}
  link = '';
  domain: string = '';
  close() {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.domain = 'https://vijay18399.github.io/dyforms/#';
    https: this.link = `${this.domain}/form/${this.data}`;
  }
  copy() {
    this.clipboardApi.copyFromContent(this.link);
  }
}
