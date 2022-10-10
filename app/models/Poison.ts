import { HasFormatter } from '../interface/HasFormatter.js';
export class Poison implements HasFormatter {
    constructor(
      readonly client: string, 
      private type: string, 
      public amount: number,
    ){}
  
    format() {
      if(this.type == 'Abrupta' || this.type == 'Muscaria'){
        return `${this.client} comprou ${this.amount} ${this.type}(s) para alucinar`;
      }else{
        return `Esse é inofensivo :)`;
      }
      
    }
}