export default function demo() {
    const cordinates: Point[] = [{ x: 13.23, y: 5.34 }, { x: 10.5, y: 7.4 }];
    printCoordinates(cordinates);

    const window: Window = {
        length: 15,
        width: 20
    };
    paintShape({ window });
    paintShape({ window: window, xPos: 4 });
    paintShape({ window: window, xPos: 4, yPos: 5 });

    const cat: Pet = { name: "Olie" };
    // cat.name = "Pippa";  // this gives an error when re-assigning as this is a readonly property
}

interface Point {
    x: number;
    y: number;
}

function printCoordinates(points: Point[]) {
    points.forEach(point => {
        console.log(`x: ${point.x}, y: ${point.y}`);
    })
}

interface Animal {
    name: string;
}

interface Cat extends Animal {
    color: string;
}

interface Window {
    length: number;
}

interface Window {
    width: number;
}

function getInterfaceArea(window: Window) {
    return window.length * window.width;
}

/***
 * optional properties
 */

interface PaintOptions {
    window: Window;
    xPos?: number;
    yPos?: number;
}

function paintShape(opts: PaintOptions) {
    console.table(opts);
}

/**
 * readonly properties
 * cannot re-assign values again
 */

interface Pet {
    readonly name: string;
}