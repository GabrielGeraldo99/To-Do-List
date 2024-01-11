function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.
      trim() !== "") {
    // Criar um novo item na lista
    let newTask = document.createElement("li");
    newTask.innerHTML = taskInput.value + '<button class="delete-btn" onClick="deleteTask(this)">Excluir</button>';

    // Adicionar o novo item à lista
    taskList.appendChild(newTask);

    // Limpar o campo de entrada
    taskInput.value = "";
  }
}

function deleteTask(btn) {
  // Remover o item da lista pai do botão de exclusão
  let listItem = btn.parentNode;
  listItem.parentNode.removeChild(listItem);
}