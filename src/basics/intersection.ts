export default function intersection() {
    console.log("intersection");

    const colorfulCircle: ColorfulCircle = {
        color: "blue",
        radius: 7
    };
    console.table(colorfulCircle);
}

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

