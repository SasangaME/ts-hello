// async functions

export function demo() {
    (async () => {
        const random = await getRandomInt(1, 100);
        console.log(`random : ${random}`);
    })();
    anonymous();
}

async function getRandomInt(min: number, max: number): Promise<number> {
    return Math.floor(Math.random() * (max - min)) + min;
}

// anonymous functions
function anonymous() {
    const names = ["Sarala", "Sasanga", "Darshana"]

    names.forEach(function (name)
    {
        console.log(name.toUpperCase());
    })
}