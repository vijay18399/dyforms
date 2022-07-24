export class Field {
  text: string;
  data_type: string;
  fieldOptions: Array<string>;
  constructor(field: {
    text: string;
    data_type: string;
    fieldOptions: Array<string>;
  }) {
    {
      this.text = field.text;
      this.data_type = field.data_type || '';
      this.fieldOptions = field.fieldOptions || '';
    }
  }
}
