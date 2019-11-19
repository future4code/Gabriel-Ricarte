function clicarEnviar(){
    const tarefa = document.getElementById("inputCampo").value;
    const diaDaSemanaSelecionado = document.getElementById("diasSemana").value;
    switch (diaDaSemanaSelecionado){
        case "segunda":
            const divDaSegunda = document.getElementById("segunda");
            divDaSegunda.innerHTML += "<p>"+tarefa+"</p>";
            break;
        case "terca":
            const divDaTerca = document.getElementById("terca");
            divDaTerca.innerHTML += "<p>"+tarefa+"</p>";
            break;
        case "quarta":
            const divDaQuarta = document.getElementById("quarta");
            divDaQuarta.innerHTML += "<p>"+tarefa+"</p>";
            break;
        case "quinta":
            const divDaQuinta = document.getElementById("quinta");
            divDaQuinta.innerHTML += "<p>"+tarefa+"</p>";
            break;
        case "sexta":
            const divDaSexta = document.getElementById("sexta");
            divDaSexta.innerHTML += "<p>"+tarefa+"</p>";
            break;
        case "sabado":
                const divDoSabado = document.getElementById("sabado");
                divDoSabado.innerHTML += "<p>"+tarefa+"</p>";
                break;
        case "domingo":
            const divDoDomingo= document.getElementById("domingo");
            divDoDomingo.innerHTML += "<p>"+tarefa+"</p>";
            break;
    }
}
