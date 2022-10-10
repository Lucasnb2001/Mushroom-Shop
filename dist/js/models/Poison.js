export class Poison {
    constructor(client, type, amount) {
        this.client = client;
        this.type = type;
        this.amount = amount;
    }
    format() {
        if (this.type == 'Abrupta' || this.type == 'Muscaria') {
            return `${this.client} comprou ${this.amount} ${this.type}(s) para alucinar`;
        }
        else {
            return `Esse é inofensivo :)`;
        }
    }
}
