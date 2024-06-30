export function narrowing(val : number | string) :number | string {
    if(typeof val == "number") {
        return val * 2;
    } else
        return val.toUpperCase();
}

interface Animal {
    name: string;
}

interface Bird extends Animal {
    swim: boolean;
}

interface Cat extends Animal {
    meow: boolean;
}

function checkAnimal(animal: Bird | Cat) {
    return "swim" in animal;
}
