class Hambergers {
    constructor(_name, _price, _ingredients) {
        this.name = _name;
        this.price = _price;
        this.ingredients = _ingredients;
    }
    
    buergerInfo() {
        console.log(this.name);
        console.log(this.price);
        console.log(this.ingredients.join(", "));
    }
}

export class Prados extends Hambergers {
    constructor() {
        super("Prados", 4.50 , ["bacon", "tomato", "lettuce", "cheese"]);
    }
}

export class Cumbres extends Hambergers {
    constructor() {
        super("Cumbres", 4.50 , ["bacon", "tomato", "cheese", 'ham']);
    }
}

export class Aquelarre extends Hambergers {
    constructor() {
        super("Aquelares", 4.50 , ["bacon", 'mushroom', "cheese", "bacon"]);
    }
}

const prados = new Prados();
const cumbres = new Cumbres();
const aquelarre = new Aquelarre();
prados.buergerInfo();
cumbres.buergerInfo();
aquelarre.buergerInfo();