import { HasFormatter } from '../interface/HasFormatter.js';
export class Cience implements HasFormatter {
    constructor(
      readonly client: string, 
      private type: string, 
      public amount: number,
    ){}
  
    format() {
        return `${this.client} comprou ${this.amount} ${this.type}(s) para estudos`;
    }
}