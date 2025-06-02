// === ARRAYS ===
    let fruits = ['apple', 'banana', 'cherry'];
    let arrayDiv = document.getElementById('arrayOutput');
    arrayDiv.innerHTML = `<h2>Fruits</h2>`;
    fruits.forEach(fruit => {
      arrayDiv.innerHTML += `<p>${fruit}</p>`;
    });

    fruits.push('mango');
    fruits.pop();

    // === OBJECT ===
    let person = {
      name: 'Sweath',
      age: 21,
      isDev: true
    };

    let objDiv = document.getElementById('objectOutput');
    objDiv.innerHTML = `<h2>Person Object</h2>
                        <p>Name: ${person.name}</p>
                        <p>Age: ${person.age}</p>
                        <p>Is Developer: ${person.isDev}</p>`;

    person.city = "Chennai";

    // === ARRAY OF OBJECTS ===
    let users = [
      { name: 'Sweath', age: 21 },
      { name: 'Keerthi', age: 20 },
      { name: 'Sutharson', age: 22 }
    ];

    let userDiv = document.getElementById('userList');
    userDiv.innerHTML = `<h2>User List</h2>`;
    users.forEach(user => {
      userDiv.innerHTML += `<p>${user.name} is ${user.age} years old</p>`;
    });

    // === PRACTICE TASKS ===
    let practiceDiv = document.getElementById('practiceTasks');
    practiceDiv.innerHTML = `<h2>Practice Tasks</h2>`;

    // Task 1
    let movies = ['Leo', 'Vikram', 'Jailer', 'Master', 'Beast'];
    practiceDiv.innerHTML += `<strong>Movies:</strong><br>`;
    movies.forEach(movie => {
      practiceDiv.innerHTML += `${movie}<br>`;
    });

    // Task 2
    let book = {
      title: 'Atomic Habits',
      author: 'James Clear',
      year: 2018
    };
    practiceDiv.innerHTML += `<br><strong>Book:</strong><br>`;
    practiceDiv.innerHTML += `${book.title} by ${book.author} (${book.year})<br>`;

    // Task 3
    let books = [
      { title: 'Ikigai', author: 'Francesc Miralles', year: 2016 },
      { title: 'Deep Work', author: 'Cal Newport', year: 2016 },
      { title: 'Alchemist', author: 'Paulo Coelho', year: 1988 }
    ];

    practiceDiv.innerHTML += `<br><strong>Books List:</strong><br>`;
    books.forEach(b => {
      practiceDiv.innerHTML += `${b.title} by ${b.author} (${b.year})<br>`;
    });