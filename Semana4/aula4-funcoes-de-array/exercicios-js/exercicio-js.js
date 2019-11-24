function exercicio01(){
    const professores = [{
                nome: "Pedro", idade: 20},
              { nome: "Joao", idade: 10},
              { nome: "Paula", idade: 12},
              { nome: "Arthur", idade: 89}]
               const acimade20 = [];
               const abaixode20 = [];

       function organizarIdade(){
               for (let x of professores){
                if(x.idade <= 20){
                   abaixode20.push(x);

                }
                else{
                   acimade20.push(x);
               }
           }
        }
            
            function imprimir(){
                console.log(abaixode20);
                console.log(acimade20);
            }
            organizarIdade();
            imprimir();
}
exercicio01();

function exercicio02(){

    let arrayTeste = [1,2,3,4,5,6]

    const duplicar = arrayTeste.map(numeros => numeros*=2);
    console.log(duplicar);

    /*
    arrayTeste.map( numeros => {
        return numeros *=2 
    })  Forma curta sem console.log, o map na arrow function é confuso
    
    */ 
;
    triplicar = (arrayTeste.map(numeros => numeros*=3))
    virarString = (triplicar.toString())
    console.log(virarString) // Não consegui fazer tudo em uma função só


}
exercicio02();

/*function exercicio03(){
    const pessoas = [
        { nome: "Paula", idade: 12, altura: 1.8},
        { nome: "João", idade: 20, altura: 1.3},
        { nome: "Pedro", idade: 15, altura: 1.9},
        { nome: "Luciano", idade: 22, altura: 1.8},
        { nome: "Artur", idade: 10, altura: 1.2},
        { nome: "Soter", idade: 70, altura: 1.9}
    ]   
    let permitidosEntrada = [];
    let negadosEntrada = [];

    function entrada(){
        for ( let z of pessoas){
            if(z.idade >= 14 && z.idade <= 60 && z.altura >= 1.5){
                permitidosEntrada.push(z);
            }
            else{
                negadosEntrada.push(z)
            }
        }
    }
    function printar(){
        
        console.log(negadosEntrada);
        console.log(permitidosEntrada);
    }
    entrada();
    printar();
}
exercicio03();*/
function exercicio04(){
    const consultas = [
        { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
        { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
        { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
        { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    ]

    const gerarEmail = consultas.map((index) => {
        if(index[2] === "true"){
            return "Olá, "+(index.genero === "masculino" ? 'Sr':'Sra')+""+consultas.nome+". Estamos enviando esta mensagem para "+(index.genero === "masculino" ? "lembrá-lo" : "lembrá-la")+" da sua consulta no dia "+consultas.dataDaConsulta+ "Por favor, acuse o recebimento deste e-mail."
        }
        else{
        return "Olá, "+(index.genero === "masculino" ? 'Sr':'Sra')+""+consultas.nome+". Infelizmente, sua consulta marcada para o dia "+consultas.dataDaConsulta+" foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la."
        }

    })
    console.log(gerarEmail()) //Nao consegui fazer rodar, incompleto
}
//exercicio04();
        
function exercicio05(){

    const contas = [
        { cliente: "Goli", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paulinha", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Darvas", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Lu", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }, 
        { cliente: "Miau", saldoTotal: -300, compras: [800] }
    ]

    contas.forEach(function(element, index){
        if(element === saldoTotal && index === [1]){
            for (x of contas){
                total = x.compra.reduce(function(total,compra){
                    return total+conmpra;
                },0);
                contas.saldoTotal = conta.saldoTotal - total
            }
        }


    })

    
}
exercicio05();