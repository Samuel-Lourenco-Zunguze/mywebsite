const btnInit = document.querySelector(".init");
const btnSair = document.querySelector(".sair");

const conteiner = document.querySelector(".conteiner");

const btnComecar = document.querySelector(".continuar");

btnInit.addEventListener("click", () => {
	btnInit.classList.toggle("remover");
	conteiner.classList.toggle("remover");
});

btnSair.addEventListener("click", () => {
	btnInit.classList.toggle("remover");
	conteiner.classList.toggle("remover");
});

btnComecar.addEventListener("click", () => {
	document.querySelector(".titulo").innerHTML = "Entrevista";
	document.querySelector(".regras").classList.toggle("remover");
	document.querySelector(".opcoes").classList.toggle("remover");
	document.querySelector(".pergunta").classList.toggle("remover");
	document.querySelector(".tempo").classList.toggle("remover");
	document.querySelector(".progresso").classList.toggle("remover");

	// document.querySelector(".proxima").classList.toggle("remover");
	btnComecar.classList.toggle("remover");
	btnSair.classList.toggle("remover");

	var opcoesLista = "";
	for (let i = 0; i < 4; i++) {
		opcoesLista += `<li><a href="#" nr="${i}">${i}</a></li>`;
	}

	console.log(opcoesLista);
	document.querySelector(".opcoes ul").innerHTML = opcoesLista;
});

const lista = questoes.map((e) => [e.pergunta, ...e.opcoes, e.resposta]);
console.log(lista);
