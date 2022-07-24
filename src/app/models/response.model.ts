import { Value } from './value.model';

export class Response {
  id?: number;
  fields: Array<Value>;

  constructor(response: { id: number; fields: Array<Value> }) {
    this.id = response.id;
    this.fields = response.fields || [];
  }
}
