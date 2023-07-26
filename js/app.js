const lista = document.querySelector("#lista");
let arrayAtividades = ["tarefa1", "tarefa2"];
function elementoTarefa(atividade) {
  return `
  <input  type="checkbox" id="item1">
  <label onclick='editar(this)' >${atividade}</label>
  
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
  if (texto != null) {
    console.log("aqui");
    arrayAtividades.push(texto);
    adicionar(texto);
  }
}
function editar(elemento) {
  const texto = prompt("editar tarefa", elemento.innerHTML);
  if (texto != null) {
    elemento.innerHTML = texto;
  }
}
