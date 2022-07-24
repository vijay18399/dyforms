import { Field } from './field.model';

export class Form {
  id?: number;
  name: string;
  fields: Array<Field>;

  constructor(form: { id: number; name: string; fields: Array<Field> }) {
    this.id = form.id;
    this.name = form.name || '';
    this.fields = form.fields || [];
  }
}
