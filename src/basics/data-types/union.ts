export default function demo() {
    printId(25)
    printId("ax-def")

    printNames("Sasanga")
    printNames(["Pippa", "Olie", "Girly", "Casey", "Chucky", "Lulu", "Chuchu"])

    printCoords({x: 87.3, y: 10.24});
}

function printId(id: ID) {
    if (typeof id === "string") {
        console.log(`Id: ${id.toUpperCase()}`)
    } else
        console.log(`id: ${id}`);
}

function printNames(names: string[] | string) {
    if (Array.isArray(names)) {
        console.log(names.join(", "))
    } else
        console.log(names);
}

// type alias
type Point = {
    x: number;
    y: number;
}

function printCoords(point: Point) {
    console.table(point)
}

type ID = number | string;