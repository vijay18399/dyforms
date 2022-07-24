import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { ResponsesComponent } from './responses/responses.component';
import { AboutComponent } from './about/about.component';
import { DialogComponent } from './dialog/dialog.component';
import { ClipboardModule } from 'ngx-clipboard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormComponent,
    ResponsesComponent,
    AboutComponent,
    DialogComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ClipboardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
