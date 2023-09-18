export class Ingredient {
    public name: String;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}

// Shortcut for creating class

/* export class Ingredient {
    constructor(public name: String, public amount: number) {}
} */