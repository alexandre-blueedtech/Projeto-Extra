/*
    Simulador de votação
    A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até este momento.
    O programa deve:
    Receber votos até que o usuário diga que não tem mais ninguém para votar;
    Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional" ou "Obrigatório";
    Ter uma função chamada votação(autorização, voto) que valida e contabiliza o voto (número entre 1 e 5) ou 
    retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado;
    Contabilizar os votos de acordo com os significados:
    1 = Candidato 1
    2 = Candidato 2
    3 = Candidato 3
    4 = Voto Nulo
    5 = Voto em Branco
    Ter uma função chamada exibirResultados() que deve mostrar:
    O total de votos para cada candidato
    O total de votos nulos
    O total de votos em branco
    Qual candidato venceu a votação
*/
/*  PROJETO EXTRA
    SIMULADOR DE VOTAÇÃO 
*/
const prompt = require('prompt-sync')();
console.clear();

/*FUNÇÃO QUE LE O ANO DE NASCIMENTO */
function autorizaVoto(anoNascimento) {
    console.clear();

    anoNascimento = +prompt('📅 Qual ano você nasceu? ');
    idade = 2022 - anoNascimento;

    console.clear();

    /*CONDICIONAL QUE LE O ANO DE NASCIMENTO E RETORNA, NEGADO, OBRIGATÓRIO E OPCIONAL */
    if (idade < 16) {
        console.log(`Você tem ${idade} anos, \n❌ Negado`);
        autorizaVoto();

    } else if (idade > 17 && idade < 70) {
        console.log(`Você tem ${idade} anos, \n✔️  Obrigatório`);
        autorização = 1;

    } else if (idade < 18 || idade > 70 && idade < 120) {
        console.log(`Você tem ${idade} anos, \n✔️  Opcional`);
        autorização = prompt("Deseja votar? (1)-Sim / (2)-Não: ");
        console.clear();

        /*CONDICIONAL SE A OPÇÃO DE VOTAR FOR NÃO */
        if (autorização == "2") {
            autorização = prompt('Tem mais eleitores para votar (1)-Sim, (2)-Não?: ');  //VARIÁVEL QUE PERGUNTA SE TEM MAIS ELEITORES PARA VOTAR
            console.clear();
            autorizaVoto();
        };

    } else if (idade > 120) {
        console.log("❌ A data digitada esta errada");
        autorizaVoto();
    };

};

/*FUNÇÃO QUE LE O VOTO DO ELEITOR */
function votação(autorização, voto) {

    votoN = 0, votoB = 0, votoC1 = 0, votoC2 = 0, votoC3 = 0; // VARIÁVEIS DOS CANDIDATOS, VOTO EM BRANCO E VOTO NULO

    /*LAÇO DE VOTAÇÃO DO ELEITOR */
    while (autorização == 1) {

        console.clear();
        console.log("\n🔴 Para votar no seu candidato => Digite o numero do candidato.\n\n🔴 Para votar em branco => Digite '0'.\n\n🔴 Para votar nulo  => tecle enter.\n");
        console.log("\n------------------------------------------------------------------");
        console.log(" Candidato: 1️⃣  \n 👨 Nome: Carlos Eduardo Carvalho \n\n Candidato: 2️⃣  \n 👱 Nome: Gael Carlos Carvalho \n\n Candidato: 3️⃣  \n 👩 Nome: Dayane Sousa Silva");
        console.log("------------------------------------------------------------------\n");

        voto = prompt("Digite o numero do seu candidato: ");


        /*LAÇO QUE FAZ A VALIDAÇÃO DAS OPÇÕES DE VOTO */
        while (voto != "" && voto != "0" && voto != "1" && voto != "2" && voto != "3") {
            console.clear();
            console.log("⚠️  ⚠️  ⚠️  DIGITE UMA DAS OPÇÕES ABAIXO ⚠️  ⚠️  ⚠️");
            console.log("\n🔴 Para votar no seu candidato => Digite o numero do candidato.\n\n🔴 Para votar em branco => Digite '0'.\n\n🔴 Para votar nulo  => tecle enter.\n");
            console.log("\n------------------------------------------------------------------");
            console.log("👨 Candidato: 1 \n   Nome: Carlos Eduardo Carvalho \n\n👱 Candidato: 2 \n   Nome: Gael Carlos Carvalho \n\n👩 Candidato: 3 \n   Nome: Dayane Sousa Silva");
            console.log("------------------------------------------------------------------\n");

            voto = prompt("Digite o numero do seu candidato: ");

        };

        /*CONDICIONAL QUE LE OS VOTOS DOS ELEITORES */
        if (voto == "") {
            votoN += 1;

        } else if (voto == "0") {
            votoB += 1;

        } else if (voto == "1") {
            votoC1 += 1;

        } else if (voto == "2") {
            votoC2 += 1;

        } else if (voto == "3") {
            votoC3 += 1;
        };


        console.clear();

        autorização = prompt(' Tem mais eleitores para votar (1)-Sim, (2)-Não?: ');  //VARIÁVEL QUE PERGUNTA SE TEM MAIS ELEITORES PARA VOTAR

        if (autorização == "1") {
            //autorização = 1;
            autorizaVoto();
        } else if (autorização == "2") {
            autorização = 0;
        };

    };

};

/*FUNÇÃO QUE MOSTRA OS RESULTADOS APÓS CONCLUIR A VOTAÇÃO */
function exibirResultados() {
    console.log(`
    Votos candidato 1: ${votoC1}
    Votos Candidato 2: ${votoC2}
    Votos Candidato 3: ${votoC3}
    Votos em Branco: ${votoB}
    Votos Nulo: ${votoN}
    `);

    /*CONDICIONAL QUE LE OS VOTOS E RETORNA O CANDIDATO VENCEDOR */
    if (votoC1 > votoC2) {
        console.log("👨 Candidato 1 é o vencedor \n");

    } else if (votoC2 > votoC1) {
        console.log("👱 Candidato 2 é o vencedor \n");

    } else if (votoC3 > votoC1 || votoC2) {
        console.log("👩 Candidato 3 é o vencedor \n");
    };

};

/*VARIÁVEIS COM AS FUNÇÕES */
let x = autorizaVoto();

let c = votação(autorização);

let z = exibirResultados();

