import { Queue } from "../Queue";  
import readlinesync = require("readline-sync");

const fila = new Queue<string>();  
let clienteBanco: number;

do {
   
    console.log(`
        # ## ### #### #########   Banco   ########## #### ### ## #
        1 - Adicionar novo cliente
        2 - Listar todos os clientes da fila
        3 - Retirar cliente da fila
        0 - Sair
    `);

    
    clienteBanco = readlinesync.questionInt("Escolha uma opção: ");

    switch (clienteBanco) {
        case 1:
            
            const nomeCliente = readlinesync.question("Digite o nome do cliente: ");
            fila.enqueue(nomeCliente);
            console.log("Cliente adicionado à fila!");
            fila.printQueue(); 

        case 2:
           
            console.log("Clientes na fila:");
            fila.printQueue();
            break;

        case 3:
            
            if (fila.isEmpty()) {
                console.log("A fila está vazia!");
            } else {
                const clienteChamado = fila.dequeue();
                console.log(`Cliente ${clienteChamado} foi chamado.`);
                fila.printQueue();  
            }
            break;

        case 0:
            
            console.log("Finalizando o programa. Tenha um ótimo dia!");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }

} while (clienteBanco !== 0);  
