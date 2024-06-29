export default function demo(): void {
    console.log(greet("TypeScripts"));
    const message = "Hello World";
    console.log(message.toUpperCase());
    const user = {
        name : "Sasanga",
        age: 34
    };
    console.table(user)
}

function greet(language: string): string {
   return `Hello world from ${language}`;
}

