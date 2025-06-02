const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="removeBtn">🗑</button>
  `;

  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".removeBtn").addEventListener("click", () => {
    li.classList.add("fadeOut");
    setTimeout(() => li.remove(), 200);
  });

  taskList.appendChild(li);
  taskInput.value = "";
});


