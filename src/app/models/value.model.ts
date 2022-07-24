export class Value {
  id: number;
  value: string;
  constructor(value: { id: number; value: string }) {
    {
      this.id = value.id;
      this.value = value.value || '';
    }
  }
}
