class Stack {
    private books: string[] = [];

    // Adicionar livro
    push(book: string): void {
        this.books.push(book);
    }

    // Listar livros
    list(): void {
        if (this.books.length === 0) {
            console.log("A pilha está vazia.");
        } else {
            console.log("Livros na pilha:");
            this.books.forEach(book => console.log(book));
        }
    }

    // Retirar livro
    pop(): void {
        if (this.books.length === 0) {
            console.log("A pilha está vazia.");
        } else {
            this.books.pop();
        }
    }
}

import * as readlineSync from 'readline-sync';

// Função do menu
function showMenu() {
    const stack = new Stack();
    let option: number;

    do {
        console.log("\nMenu:");
        console.log("1 - Adicionar Livro");
        console.log("2 - Listar Livros");
        console.log("3 - Retirar Livro");
        console.log("0 - Sair");

        option = readlineSync.questionInt("Escolha uma opção: ");

        if (option === 1) {
            const book = readlineSync.question("Nome do livro: ");
            stack.push(book);
        } else if (option === 2) {
            stack.list();
        } else if (option === 3) {
            stack.pop();
        }

    } while (option !== 0);

    console.log("Programa encerrado.");
}

showMenu();
