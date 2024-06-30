export default function demo() {
    const cordinates: Point[] = [{x: 13.23, y: 5.34}, {x: 10.5, y: 7.4}];
    printCoordinates(cordinates)
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
