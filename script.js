document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');
  
    addButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        const listItem = document.createElement('li');
        const taskTextSpan = document.createElement('span');
        const deleteButton = document.createElement('button');
  
        taskTextSpan.textContent = taskText;
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
  
        listItem.appendChild(taskTextSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
  
        taskInput.value = '';
  
        deleteButton.addEventListener('click', function() {
          listItem.remove();
        });
      }
    });
  });