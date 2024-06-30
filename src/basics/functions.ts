// async functions

export default  function demo() {
    (async () => {
        const random = await getRandomInt(1, 100);
        console.log(`random : ${random}`);
    })();
}

async function getRandomInt(min: number, max: number): Promise<number> {
    return Math.floor(Math.random() * (max - min)) + min;
}