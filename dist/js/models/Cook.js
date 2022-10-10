export class Cook {
    constructor(client, type, amount) {
        this.client = client;
        this.type = type;
        this.amount = amount;
    }
    format() {
        if (this.type == 'Abrupta' || this.type == 'Muscaria') {
            return `O item não é comestivel`;
        }
        else {
            return `${this.client} comprou ${this.amount} ${this.type}(s) para fazer receitas`;
        }
    }
}
