export default function arrays() {
    const arr = [2, 4, 5, 7, 9];

    const filteredResult = arr.filter(item => item > 5);
    console.log("filtered result: ", filteredResult);

    const findResult = arr.find(item => item > 5);
    console.log("find result: ", findResult);
    const findIndex = arr.findIndex(item => item == 5);
    console.log("find index: ", findIndex);

    const someResult = arr.some(item => item == 5);
    console.log("some result: ", someResult);

    const everyResult = arr.every(item => item == 5);
    console.log("every result: ", everyResult);

    const fillResult = arr.fill(2, 2, 4);
    console.log("fill result", fillResult);
}

