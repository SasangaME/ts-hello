import demo from "./basics/union";

export function main() {
    try {
        console.log("hello world");
        demo();
    } catch (ex: any) {
        console.error(ex);
    }

}
main();

