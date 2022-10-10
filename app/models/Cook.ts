import { HasFormatter } from '../interface/HasFormatter.js';
export class Cook implements HasFormatter {
    constructor(
      readonly client: string, 
      private type: string, 
      public amount: number,
    ){}
  
    format() {
      if(this.type == 'Abrupta' || this.type == 'Muscaria'){
        return `O item não é comestivel`;
      }else{
        return `${this.client} comprou ${this.amount} ${this.type}(s) para fazer receitas`;
      }
      
    }
}