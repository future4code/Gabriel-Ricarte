function limparInput(){
    document.getElementById("valor").value = "";  
    document.getElementById("typeSelecytor").value = "";
    document.getElementById("descricao").value = "";
}


class Despesa{
    constructor(valor, tipo, descricao){
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
        
    }
    
    cadastrarDespesa(){
        const divDespesaCadastrada = "<div class='despesa-cadastrada'> <div> "+this.tipo+"</div> <br> <div> R$"+this.valor+"</div> <br> <div>"+this.descricao+"</div> </div>"
        return divDespesaCadastrada

    }
    imprimirExtrato(){
        const divExtrato
    }

}

let arrayOfPosts = []

function lancarDespesa(){
    const valueInput = document.getElementById("valor").value
    const typoSelect = document.getElementById("typeSelector").value
    const descriptionTextArea = document.getElementById("descricao").value

    const classExpense = new NovaDespesa(valor, tipo, descricao)
    arrayOfPosts.push(classeDespesa)
    const expenseDetails = document.getElementById("expense-details")
    expenseDetails.innerHTML = "";

    for (let expense of arrayOfPosts){
        expenseDetails.innerHTML += expense.cadastrarDespesa()
    }


}

function filtrarDespesa(){
    
}