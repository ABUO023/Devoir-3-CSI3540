document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const list = document.getElementById("taskList");

    function addTask() {

        const taskText = input.value.trim();

        if (taskText === "") {
            alert("Veuillez entrer une tâche !");
            return;
        }

        // create list item
        const li = document.createElement("li");
        li.className =
        "flex items-center justify-between border border-neutral-800 px-3 py-2 hover:border-neutral-600 transition";

        // task text
        const span = document.createElement("span");
        span.innerHTML = taskText;
        span.className = "text-neutral-200";

        // button container
        const actions = document.createElement("div");
        actions.className = "flex gap-2";

        // modify button
        const modifyButton = document.createElement("button");
        modifyButton.className =
        "p-1 border border-neutral-700 hover:border-neutral-400 transition";
        modifyButton.innerHTML = `<i data-lucide="pencil" class="w-4 h-4"></i>`;

        modifyButton.addEventListener("click", function () {

            const newText = prompt("Modifier la tâche :", span.innerHTML);

            if (newText !== null && newText.trim() !== "") {
                span.innerHTML = newText.trim();
            }

        });

        // delete button
        const deleteButton = document.createElement("button");
        deleteButton.className =
        "p-1 border border-neutral-700 hover:border-red-500 transition";
        deleteButton.innerHTML = `<i data-lucide="trash-2" class="w-4 h-4"></i>`;

        deleteButton.addEventListener("click", function () {

            list.removeChild(li);

        });

        // append buttons
        actions.appendChild(modifyButton);
        actions.appendChild(deleteButton);

        // append to list item
        li.appendChild(span);
        li.appendChild(actions);

        // add to list
        list.appendChild(li);

        // initialize lucide icons
        lucide.createIcons();

        // clear input
        input.value = "";
        input.focus();
    }

    // click add
    addButton.addEventListener("click", addTask);

    // enter key support
    input.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
            addTask();
        }

    });

});