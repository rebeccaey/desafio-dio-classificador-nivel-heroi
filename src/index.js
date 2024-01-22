// Criando uma constante para realizar leitura de dados pelo teclado no console.
const teclado = require("prompt-sync")();

// Declaração de variáveis
let heroName;
let heroXp;

//Estrutura de repetição "while", representando os ciclos de execução do programa.
while (true) {

  // Apaga o valor de heroXp, para depois do primeiro ciclo
  heroXp = undefined 
  
  //Pergunta o nome do herói na tela e faz com que a variável heroName receba uma entrada de dados pelo teclado no console.
  console.log("Digite o nome do Herói ou 'sair' para encerrar o programa: ");
  heroName = teclado();

  // Verifica se o nome do herói é igual a sair
  // encerra a estrutura de repetição WHILE através do comando process.exit().
  if (heroName === "sair") {
    // Valor zero indica que o programa encerrou sem erros
    process.exit(0);
  }
    
  // O nome sendo diferente de sair, vamos fazer a leitura da experiência do herói.
  
  // Enquanto o usuário não informar um número inteiro
  while (!Number.isInteger(heroXp)) {
    console.log("Digite a experiência do Herói " + heroName + ":");
    // teclado() retorna um valor de texto, precisamos converter para um valor 
    // numérico para executar as validações da experiência e depois
    // atribuir o valor já convertido para a variável heroXp
    heroXp = parseInt(teclado());
  }

  //Agora vamos verificar a classificação do herói de acordo com o nível 
  //informado utilizando a estrutura condicional IF/IF ELSE.
  if (heroXp < 1000) {
    console.log("O Herói de nome " + heroName + " está no nível de: Ferro");
    } else if (heroXp <= 2000) {
      console.log("O Herói de nome " + heroName + " está no nível de: Bronze");
    } else if (heroXp <= 5000) {
      console.log("O Herói de nome " + heroName + " está no nível de: Prata");
    } else if (heroXp <= 7000) {
      console.log("O Herói de nome " + heroName + " está no nível de: Ouro");
    } else if (heroXp <= 8000) {
      console.log("O Herói de nome " + heroName + " está no nível de: Platina");
    } else if (heroXp <= 9000) {
      console.log("O Herói de nome " + heroName + " está no nível de: Ascendente");
    } else if (heroXp <= 10000) {
      console.log("O Herói de nome " + heroName + " está no nível de: Imortal");
  } else {
    console.log("O Herói de nome " + heroName + " está no nível de: Radiante");
  }

  console.log("\nAperte enter para continuar");
  teclado(); //Faz uma leitura falsa, apenas para o console esperando o usuário digitar enter.
  console.clear(); //limpa o console.  
}
