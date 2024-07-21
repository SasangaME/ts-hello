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

/**
 * `interface`s allowed us to build up new types from other types by extending them. TypeScript provides another construct 
 * intersection types that is mainly used to combine existing object types.

 * An intersection type is defined using the `&` operator.
 */