
// Faça a comparação entre cada personagem. Utilize estruturas de repetição para percorrer cada elemento do Array e fazer a comparação 
// Deve imprimir a descrição de cada personagem que esta sendo comparado e também apontar onde um personagem vence.  
 

//criando personagens com a função 'descrição' como atributo 
const panteraNegra = { 
    nome: "T'Challa", 
    codinome: "Pantera Negra", 
    armaPrincipal: "Garras", 
    armaSecundaria: "", 
    velocidade: 90, //considere de 0 a 100 
    forca: 75, //considere de 0 a 100 
    resistencia: 70, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
} 

const homemDeFerro = { 
    nome: "Tony Stark", 
    codinome: "Homem de Ferro", 
    armaPrincipal: "Traje", 
    armaSecundaria: "", 
    velocidade: 85, //considere de 0 a 100 
    forca: 70, //considere de 0 a 100 
    resistencia: 65, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
} 
 
const thor = { 
    nome: "Thor", 
    codinome: "Thor Odinson", 
    armaPrincipal: "Mjölnir", 
    armaSecundaria: "", 
    velocidade: 80, //considere de 0 a 100 
    forca: 75, //considere de 0 a 100 
    resistencia: 85, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
} 
 
const hulk = { 
    nome: "Bruce Banner", 
    codinome: "Hulk", 
    armaPrincipal: "", 
    armaSecundaria: "", 
    velocidade: 65, //considere de 0 a 100 
    forca: 90, //considere de 0 a 100 
    resistencia: 70, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
} 

const capitaoAmerica = { 
    nome: "Steve Rogers", 
    codinome: "Capitão América", 
    armaPrincipal: "Escudo americano", 
    armaSecundaria: "", 
    velocidade: 85, //considere de 0 a 100 
    forca: 75, //considere de 0 a 100 
    resistencia: 80, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
} 
 
const thanos = { 
    nome: "Thanos", 
    codinome: "Thanos", 
    armaPrincipal: "Manopla", 
    armaSecundaria: "", 
    velocidade: 65, //considere de 0 a 100 
    forca: 80, //considere de 0 a 100 
    resistencia: 85, //considere de 0 a 100 
    descricao: function() { 
        return "Nome do personagem: " + this.nome + "\n" 
        + "Codinome do personagem: " + this.codinome + "\n" 
        + "Arma principal: " + this.armaPrincipal + "\n" 
        + "Arma principal: " + this.armaSecundaria + "\n" 
        + "Nível de Força: " + this.forca + "\n" 
        + "Nível de velocidade: " + this.velocidade + "\n" 
        + "Nível de resistência: " + this.resistencia + "\n" 
    } 
} 

//criando array com os personagens 
const personagens = [thor, capitaoAmerica, homemDeFerro, panteraNegra, thanos, hulk] 
 
function compararPersonagens(personagens) {
    for (let i = 0; i < personagens.length; i++) {
        for (let j = i + 1; j < personagens.length; j++) {
            const personagem1 = personagens[i];
            const personagem2 = personagens[j];

            let pontosPersonagem1 = 0;
            let pontosPersonagem2 = 0;
            
            //exibindo as informações dos personagens
            console.log("\nPersonagens batalhando: " + personagem1.descricao() + "       VS \n" + personagem2.descricao())

            //comparando velocidade
            if (personagem1.velocidade > personagem2.velocidade) {
                pontosPersonagem1++;
            } else if (personagem1.velocidade < personagem2.velocidade) {
                pontosPersonagem2++;
            }

            //comparando força
            if (personagem1.forca > personagem2.forca) {
                pontosPersonagem1++;
            } else if (personagem1.forca < personagem2.forca) {
                pontosPersonagem2++;
            }

            //comparando resistência
            if (personagem1.resistencia > personagem2.resistencia) {
                pontosPersonagem1++;
            } else if (personagem1.resistencia < personagem2.resistencia) {
                pontosPersonagem2++;
            }

            //exibindo o resultado da comparação
            if (pontosPersonagem1 > pontosPersonagem2) {
                console.log(`${personagem1.codinome} vence ${personagem2.codinome}`);
            } else if (pontosPersonagem1 < pontosPersonagem2) {
                console.log(`${personagem2.codinome} vence ${personagem1.codinome}`);
            } else {
                console.log(`${personagem1.codinome} e ${personagem2.codinome} empatam`);
            }
        }
    }
}


compararPersonagens(personagens);
