import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormComponent } from './form/form.component';
import { ResponsesComponent } from './responses/responses.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {
    path: 'form-builder',
    component: FormBuilderComponent,
  },
  {
    path: 'form/:formId',
    component: FormComponent,
  },
  {
    path: 'responses/:formId',
    component: ResponsesComponent,
  },
  {
    path: '',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
