export default function demo(): void {
    console.log(greet("TypeScript"));
}

function greet(language: string): string {
    return `Hello world from ${language}`;
}

