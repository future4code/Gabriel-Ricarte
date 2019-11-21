

function cadastrar(){
    const inscrito = {
        idade: document.getElementById("idade").value,
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
    }


    console.log(inscrito)

    const paraOndeVaiAsDivs = document.getElementById('containerList')
    
    
    const listaDeInscritos = []
    listaDeInscritos.push(inscrito) /* necessario para usar o for...of pois ele itera arrays 
    */

    for (let x of listaDeInscritos) {
        paraOndeVaiAsDivs.innerHTML += '<div>' +
        '<p> Nome: ' + x.nome + '</p>'  +
        '<p> idade:' + x.idade + '</p>' +
        '<p> Email:' + x.email + '</p>' +'</div>'

      
    }           
    
    

}