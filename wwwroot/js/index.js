const iniciar = async () => {
    const mensagem = document.getElementById("mensagem");
    const sobrenome = document.getElementById("sobrenome");
    const github = document.getElementById("github");
    const response = await fetch('/QuemSouEuAPI');
    const result = await response.json();
    console.log(result);
    // mensagem.innerHTML = "<span>Nome: </span>"+ result.nome;
    // sobrenome.innerHTML = "<span>Sobre Nome: </span>"+result.sobrenome;
    // github.innerHTML = "<span>Usuario Git Hub: </span>"+result.usuarioGitHub;


    mensagem.innerHTML = `
    <div><span>Nome: </span>${result.nome}</div>
    <div><span>Sobreome: </span>${result.sobrenome}</div>
    <div><span>Usuário: </span>${result.usuarioGitHub}</div>
    `;

    
};

document.addEventListener('DOMContentLoaded', iniciar);