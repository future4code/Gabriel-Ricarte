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

    const arrayTeste = [1,2,3,4,5,6]

    const multiplicandoPorDois = () =>{
        arrayTeste*2
        return arrayTeste
    }


}








function exercicio03(){
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
exercicio03();