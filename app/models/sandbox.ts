import { Cook } from './Cook.js';
import { Cience } from './Cience.js';
import { Poison } from './Poison.js';
import { ListTemplate } from './ListTemplate.js';
import { HasFormatter } from '../interface/HasFormatter.js';
//const Cook = require('./Cook.js');

const formss = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.getElementById('type') as HTMLInputElement;
const buyer = document.getElementById('buyer') as HTMLInputElement;
const use = document.getElementById('use') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);

formss.addEventListener('submit', (e: Event) =>{
    let messege : HasFormatter;
    e.preventDefault();

    console.log(
        type.value,
        buyer.value,
        use.value,
        amount.value 
    );
    messege = new Poison(buyer.value, type.value, amount.valueAsNumber);
    if(use.value == 'food'){
        messege = new Cook(buyer.value, type.value, amount.valueAsNumber);
        console.log(messege.format());
    }else if(use.value == 'cience'){
        messege = new Cience(buyer.value, type.value, amount.valueAsNumber);
        console.log(messege.format());
    }if(amount.value[0] != '-'){
        list.render(messege, use.value, "end");
    }
    
    

});

