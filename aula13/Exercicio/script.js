const nome = prompt("Qual o seu nome completo?");
const letras = nome.length;
const segundaLetra = nome.charAt(1);
document.body.innerHTML += `O seu nome é: ${nome} <br />`;
document.body.innerHTML += `O seu tem:  ${letras} letras <br />`;
document.body.innerHTML += `O seu nome com letras maisculas: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `O seu nome com letras maisculas: ${nome.toLowerCase()} <br />`;
document.body.innerHTML += `A segunda letra do seu nome é:  ${segundaLetra} <br />`;
document.body.innerHTML += `Qual a primeira letra do indice do seu nome:  ${nome.charAt(0)} <br />`;
document.body.innerHTML += `As palavras do seu nome:  ${nome.split(" ")} <br />`;