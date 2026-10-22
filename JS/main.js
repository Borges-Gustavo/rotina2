import { 
    createFilme, 
    getFilmes, 
    updateFilme, 
    deleteFilme 
} from "./crud.js";

const btnCadastrar = document.getElementById("btn");
const btnGet = document.getElementById("btnGet");
const inputFilme = document.getElementById("nomeF");
const inputNota = document.getElementById("nota");
const inputPesquisa = document.getElementById("input-pesquisa");
const listaUl = document.getElementById("lista");

async function mostrarLista(filtro = "") {
    listaUl.innerHTML = "";

    try {
        const snapshot = await getFilmes();

        if (!snapshot.exists()) {
            listaUl.innerHTML = "<li>Nenhum filme encontrado!</li>";
            return;
        }

        snapshot.forEach(function(item) {
            const dados = item.val();
            const id = item.key;

            // Garante que o filme existe antes de formatar
            const nomeFilme = dados.filme || "Sem título";
            const notaFilme = dados.nota || "Sem nota";

            if (filtro && !nomeFilme.toLowerCase().includes(filtro.toLowerCase())) {
                return;
            }

            const li = document.createElement("li");
            li.textContent = `${nomeFilme} - ${notaFilme} `;

            const btnEditarFilme = document.createElement("button");
            btnEditarFilme.textContent = "Editar";
            btnEditarFilme.addEventListener("click", async function() {
                const novoFilme = prompt("Novo filme: ", nomeFilme);
                const novaNota = prompt("Nova nota: ", notaFilme);

                if (novoFilme && novaNota) {
                    await updateFilme(id, novoFilme, novaNota);
                    alert("Editado com sucesso!");
                    mostrarLista();
                }
            });

            const btnExcluirFilme = document.createElement("button");
            btnExcluirFilme.textContent = "Excluir";
            btnExcluirFilme.addEventListener("click", async function() {
                const confirmar = confirm("Quer mesmo excluir sua review de " + nomeFilme + "?");
                if (confirmar) {
                    await deleteFilme(id);
                    alert("Review excluída com sucesso!");
                    mostrarLista();
                }
            });

            li.appendChild(btnEditarFilme);
            li.appendChild(btnExcluirFilme);
            listaUl.appendChild(li);
        });
    } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        listaUl.innerHTML = "<li>Erro ao carregar a lista. Verifique o console.</li>";
    }
}

btnCadastrar.addEventListener("click", async function() {
    const filme = inputFilme.value.trim();
    const nota = inputNota.value.trim();

    if(filme === "" || nota === "") {
        alert("Preencha todos os espaços!");
        return;
    }

    await createFilme(filme, nota);
    alert("Cadastrado com sucesso!");

    inputFilme.value = "";
    inputNota.value = "";
    mostrarLista();
});

btnGet.addEventListener('click', function () {
    mostrarLista(inputPesquisa.value);
});

inputPesquisa.addEventListener('keyup', function(){
    mostrarLista(inputPesquisa.value);
});

mostrarLista();