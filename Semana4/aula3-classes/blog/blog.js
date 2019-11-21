function teclarEnter(event){
    if(event.key === "Enter"){
        criarPosts()
    }

}

function limparInput(){
    document.getElementById("titulo").value = "";  
    document.getElementById("autor").value = "";
    document.getElementById("conteudo").value = ""
}



class PostBlog {
    constructor(titulo, autor, conteudo){
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
    
    /*criar(){
        const construirPost = "<div> Titulo Do Post: "+this.titulo+"</div>"+"<br>"+"<div> Autor: "+this.autor+"</div>"+"<br>"+"<div> Conteudo: "+this.conteudo+"</div>";
        document.getElementById("container-posts").innerHTML = construirPost;
        
    }  Não consegui realizar mais de um post com o método acima, então fiz sem esse         método que a paulinha me ajudou.
    */


}

const arrayComPosts = [];


function criarPosts(){

const pegandoTitulo = document.getElementById("titulo").value;
const pegandoAutor = document.getElementById("autor").value;
const pegandoConteudo = document.getElementById("conteudo").value;
const postNovo = new PostBlog(pegandoTitulo, pegandoAutor, pegandoConteudo);
arrayComPosts.push(postNovo);
const containerComPosts = document.getElementById("container-posts");

    for (let lacoDoPost of arrayComPosts){
        containerComPosts.innerHTML += "<div class='posts-gerados'> <div> Titulo Do Post: "+lacoDoPost.titulo+"</div>"+"<br>"+"<div> Autor: "+lacoDoPost.autor+"</div>"+"<br>"+"<div> Conteudo: "+lacoDoPost.conteudo+"</div>"+"<br>"+"</div>";
    }

    limparInput();
}