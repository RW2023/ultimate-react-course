fetch('https://jsonplaceholder.typicode.com/todos/')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    const completedTodos = data.filter((todo=> todo.completed === true))
    console.log(completedTodos);
    const todoTitles = data.map((todo) => todo.title)
    todoTitles

  console.log(todoTitles);  });

  

