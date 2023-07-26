const lista = document.querySelector("#lista");
let arrayAtividades = ["tarefa1", "tarefa2"];
function elementoTarefa(atividade) {
  return `
  <input type="checkbox" id="item1">
  <label for="item1">${atividade}</label>
  
    `;
}
arrayAtividades.forEach((atividade) => {
  adicionar(atividade);
});
function adicionar(tarefa) {
  let li = document.createElement("li");
  li.innerHTML = elementoTarefa(tarefa);
  lista.append(li);
}

function adicionarTarefa() {
  texto = prompt();
  console.log(texto);
  arrayAtividades.push(texto);
  adicionar(texto);
}
