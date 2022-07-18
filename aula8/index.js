/*
Kevin William Leal tem 21 anos, pesa 60 kilos
tem 1.73 de altura e seu imc é de 29.9
Kevin William nasceu em 2000
*/

const nome = 'Kevin William';
const sobrenome = 'Leal de Sousa';
const idade = 21;
const peso = 60;
const altura = 1.73;
let anoNascimento;
let imc;

anoNascimento = 2022 - idade;
imc = peso/ (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu no ano de ${anoNascimento} pesa ${peso} kilos, tem ${altura} de altura e seu imc é de ${imc}`);