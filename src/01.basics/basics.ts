export default function demo(): void {
    console.log(greet("TypeScripts"));
}

function greet(language: string): string {
   return `Hello world from ${language}`;
}

