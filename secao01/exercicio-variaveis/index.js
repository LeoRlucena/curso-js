const nome = 'Leonardo Lucena';
const idade = 30;
const peso = 70;
const altura = 1.80;
let imc = peso / (altura * altura);
let anoNascimento = 2025 - idade;

console.log(`${nome} tem ${idade} anos pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);