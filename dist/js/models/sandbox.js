import { Cook } from './Cook.js';
import { Cience } from './Cience.js';
import { Poison } from './Poison.js';
import { ListTemplate } from './ListTemplate.js';
const formss = document.querySelector('.new-item-form');
const type = document.getElementById('type');
const buyer = document.getElementById('buyer');
const use = document.getElementById('use');
const amount = document.getElementById('amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
formss.addEventListener('submit', (e) => {
    let messege;
    e.preventDefault();
    console.log(type.value, buyer.value, use.value, amount.value);
    messege = new Poison(buyer.value, type.value, amount.valueAsNumber);
    if (use.value == 'food') {
        messege = new Cook(buyer.value, type.value, amount.valueAsNumber);
        console.log(messege.format());
    }
    else if (use.value == 'cience') {
        messege = new Cience(buyer.value, type.value, amount.valueAsNumber);
        console.log(messege.format());
    }
    if (amount.value[0] != '-') {
        list.render(messege, use.value, "end");
    }
});
