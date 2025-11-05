import readlineSync from 'readline-sync';

let cores: string[] = [];

for (let i = 0; i < 5; i++) {
     let cor = readlineSync.question(`Digite a ${i + 1}ª cor: `);
       cores.push(cor); 
       }


       console.log("\nListar todas as cores:");
cores.forEach(cor => {
  console.log(cor);
});

cores.sort();


console.log("\nOrdenar as cores:");
cores.forEach(cor => {
  console.log(cor);
});