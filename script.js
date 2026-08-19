const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#taskListUl');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
	taskList.innerHTML = '';

	tasks.forEach((task) => {
		const item = document.createElement('li');
		const label = document.createElement('label');
		const checkbox = document.createElement('input');
		const text = document.createElement('span');
		const deleteButton = document.createElement('button');

		checkbox.type = 'checkbox';
		checkbox.checked = task.completed;
		checkbox.addEventListener('change', () => toggleTask(task.id));

		text.textContent = task.text;
		deleteButton.type = 'button';
		deleteButton.textContent = 'Excluir';
		deleteButton.addEventListener('click', () => deleteTask(task.id));

		if (task.completed) {
			item.classList.add('completed');
		}

		label.append(checkbox, text);
		item.append(label, deleteButton);
		taskList.appendChild(item);
	});
}

function newTask() {
	const text = taskInput.value.trim();

	if (!text) {
		taskInput.focus();
		return;
	}

	tasks.push({ id: Date.now(), text, completed: false });
	saveTasks();
	renderTasks();
	taskInput.value = '';
	taskInput.focus();
}

function toggleTask(taskId) {
	tasks = tasks.map((task) => task.id === taskId
		? { ...task, completed: !task.completed }
		: task);
	saveTasks();
	renderTasks();
}

function deleteTask(taskId) {
	tasks = tasks.filter((task) => task.id !== taskId);
	saveTasks();
	renderTasks();
}

addTaskButton.addEventListener('click', newTask);
taskInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		newTask();
	}
});

renderTasks();