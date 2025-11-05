import readlineSync from 'readline-sync';

const numeros: Set<number> = new Set<number>();

for (let i = 1; i <= 10; i++) {
  let num = readlineSync.questionInt(`Digite o ${i}º número: `);
  numeros.add(num); 
  }

  let ordenados = Array.from(numeros).sort((a, b) => a - b);

  console.log('Listar dados do Set:');
for (let numero of ordenados) {
     console.log(numero);
     }