const tituloPost = document.getElementById("titulo-post")
const autorPost = document.getElementById("autor-post")
const conteudoPost = document.getElementById("conteudo-post")

const colecao = []

const criarPost = () => {
    let postagem = document.getElementById("container-de-posts")
    objetoPost = {
        titulo: tituloPost.value,
        autor: autorPost.value,
        conteudo: conteudoPost.value
    }
    if(objetoPost.titulo !== '' && objetoPost.autor !== '' && objetoPost.conteudo){
        colecao.push(objetoPost)
        postagem.innerHTML += `<div>
        <h1>${objetoPost.titulo}</h1>
        <p>${objetoPost.conteudo}</p>
        <p>${objetoPost.autor}</p>
    </div>`;
    }
    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""
}