export default function union() {
    let val: CustomVal = "John";
    console.log("val: ", val);
    val = 4.5;
    console.log("val: ", val);
    // val = true; // this throws an error
}

type CustomVal = string | number;

/**
 * A union type represents a value that can be one of several specified types.
 */