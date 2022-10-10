export class Cience {
    constructor(client, type, amount) {
        this.client = client;
        this.type = type;
        this.amount = amount;
    }
    format() {
        return `${this.client} comprou ${this.amount} ${this.type}(s) para estudos`;
    }
}
