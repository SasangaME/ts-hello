export default function demo() {

}

function greet(person: { name: string , age?: number }) {
    return `Hello ${person.name}!`;
}