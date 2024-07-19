class Point {
    x!: number;
    y!: number;
}

export default function demo() {
    const pt = new Point();
    pt.x = 10;
    pt.y = 11;
    console.table(pt);
}
