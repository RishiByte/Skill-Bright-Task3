document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const totalTasks = document.getElementById('total-tasks');
    const completedTasks = document.getElementById('completed-tasks');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => {
                task.completed = !task.completed;
                tasks[index] = task;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            });

            const span = document.createElement('span');
            span.textContent = task.text;

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                const newText = prompt('Edit task:', task.text);
                if (newText && newText.trim() !== '') {
                    task.text = newText;
                    tasks[index] = task;
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                    renderTasks();
                }
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            const taskActions = document.createElement('div');
            taskActions.className = 'task-actions';
            taskActions.appendChild(editBtn);
            taskActions.appendChild(deleteBtn);
            li.appendChild(taskActions);

            taskList.appendChild(li);
        });

        totalTasks.textContent = tasks.length;
        completedTasks.textContent = tasks.filter(task => task.completed).length;
    }

    addTaskBtn.addEventListener('click', () => {
        const text = taskInput.value.trim();
        if (text !== '') {
            tasks.push({ text, completed: false });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            taskInput.value = '';
            renderTasks();
        }
    });

    clearAllBtn.addEventListener('click', () => {
        tasks = [];
        localStorage.removeItem('tasks');
        renderTasks();
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            if (filter === 'all') {
                taskList.innerHTML = '';
                tasks.forEach(task => {
                    const li = document.createElement('li');
                    li.className = task.completed ? 'completed' : '';

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = task.completed;
                    checkbox.addEventListener('change', () => {
                        task.completed = !task.completed;
                        tasks[index] = task;
                        localStorage.setItem('tasks', JSON.stringify(tasks));
                        renderTasks();
                    });

                    const span = document.createElement('span');
                    span.textContent = task.text;

                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    editBtn.addEventListener('click', () => {
                        const newText = prompt('Edit task:', task.text);
                        if (newText && newText.trim() !== '') {
                            task.text = newText;
                            tasks[index] = task;
                            localStorage.setItem('tasks', JSON.stringify(tasks));
                            renderTasks();
                        }
                    });

                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', () => {
                        tasks.splice(index, 1);
                        localStorage.setItem('tasks', JSON.stringify(tasks));
                        renderTasks();
                    });

                    li.appendChild(checkbox);
                    li.appendChild(span);
                    const taskActions = document.createElement('div');
                    taskActions.className = 'task-actions';
                    taskActions.appendChild(editBtn);
                    taskActions.appendChild(deleteBtn);
                    li.appendChild(taskActions);

                    taskList.appendChild(li);
                });
            } else if (filter === 'active') {
                taskList.innerHTML = '';
                tasks.filter(task => !task.completed).forEach(task => {
                    const li = document.createElement('li');
                    li.className = '';

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.addEventListener('change', () => {
                        task.completed = true;
                        tasks[index] = task;
                        localStorage.setItem('tasks', JSON.stringify(tasks));
                        renderTasks();
                    });

                    const span = document.createElement('span');
                    span.textContent = task.text;

                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    editBtn.addEventListener('click', () => {
                        const newText = prompt('Edit task:', task.text);
                        if (newText && newText.trim() !== '') {
                            task.text = newText;
                            tasks[index] = task;
                            localStorage.setItem('tasks', JSON.stringify(tasks));
                            renderTasks();
                        }
                    });

                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', () => {
                        tasks.splice(index, 1);
                        localStorage.setItem('tasks', JSON.stringify(tasks));
                        renderTasks();
                    });

                    li.appendChild(checkbox);
                    li.appendChild(span);
                    const taskActions = document.createElement('div');
                    taskActions.className = 'task-actions';
                    taskActions.appendChild(editBtn);
                    taskActions.appendChild(deleteBtn);
                    li.appendChild(taskActions);

                    taskList.appendChild(li);
                });
            } else if (filter === 'completed') {
                taskList.innerHTML = '';
                tasks.filter(task => task.completed).forEach(task => {
                    const li = document.createElement('li');
                    li.className = 'completed';

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = true;
                    checkbox.addEventListener('change', () => {
                        task.completed = false;
                        tasks[index] = task;
                        localStorage.setItem('tasks', JSON.stringify(tasks));
                        renderTasks();
                    });

                    const span = document.createElement('span');
                    span.textContent = task.text;

                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    editBtn.addEventListener('click', () => {
                        const newText = prompt('Edit task:', task.text);
                        if (newText && newText.trim() !== '') {
                            task.text = newText;
                            tasks[index] = task;
                            localStorage.setItem('tasks', JSON.stringify(tasks));
                            renderTasks();
                        }
                    });

                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', () => {
                        tasks.splice(index, 1);
                        localStorage.setItem('tasks', JSON.stringify(tasks));
                        renderTasks();
                    });

                    li.appendChild(checkbox);
                    li.appendChild(span);
                    const taskActions = document.createElement('div');
                    taskActions.className = 'task-actions';
                    taskActions.appendChild(editBtn);
                    taskActions.appendChild(deleteBtn);
                    li.appendChild(taskActions);

                    taskList.appendChild(li);
                });
            }
        });
    });

    renderTasks();
});
