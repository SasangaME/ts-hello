export default function demo() {
    const cars: Car[] = [{color: "red"}, {color: "green"}, {color: "yellow"}];
    const vans: Van[] = [{numOfPassengers: 10,}, {numOfPassengers: 20}];

    add<Car>({color: "black"}, cars);
    add<Van>({numOfPassengers: 15}, vans);

    console.log(`car count : ${cars.length}`);
    console.log(`van count : ${vans.length}`);
}

function add<Type>(item: Type, items: Type[]): void {
    items.push(item);
}

interface Car {
    color: string;
}

interface Van {
    numOfPassengers: number;
}