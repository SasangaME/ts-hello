export default function demo() {
    fetchNumber(processNumber);
}

type MyCallback = (val: number) => number;

function fetchNumber(myCallback: MyCallback) {
    const val = 5;
    const result = myCallback(val);
    console.log(result);
}

function processNumber(val: number) {
    return val * val;
}