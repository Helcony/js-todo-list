let userInput = prompt("What would you like to do?");
const todos = ["collect chicken eggs", "clean litter box"];

while (userInput !== "quit" && userInput !== "q") {
    if (userInput === "new") {
        const todo = prompt("Enter a new todo");
        todos.push(todo);
        console.log(`${todo} added to the list`);
    } else if (userInput === "list") {
        console.log("**********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]} `);
        }
        console.log("**********");
    } else if (userInput === "delete") {
        console.log("**********");
        console.log("What would you like to delete?");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]} `);
        }
        console.log("**********");
        const index = parseInt(prompt("Enter an index to delete:"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]} has been deleted.`);
        } else {
            console.log("invalid index");
        }
    }
    userInput = prompt("What would you like to do?");
}
console.log("quit");
