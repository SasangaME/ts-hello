// async functions

export function demo() {
    (async () => {
        const random = await getRandomInt(1, 100);
        console.log(`random : ${random}`);
    })();

    anonymous();

    coordinates({
        x: 101.4,
        y: 5.2
    });
}

async function getRandomInt(min: number, max: number): Promise<number> {
    return Math.floor(Math.random() * (max - min)) + min;
}

// anonymous functions
function anonymous() {
    const names = ["Sarala", "Sasanga", "Darshana"]

    names.forEach(function (name)// passing a function as a parameter
    {
        console.log(name.toUpperCase());
    })
}

function coordinates(pt:{ x: number; y: number }) {
    console.log("coordinates");
    console.table(pt);
}