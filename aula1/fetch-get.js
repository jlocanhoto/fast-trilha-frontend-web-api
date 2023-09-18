const response = await fetch("http://localhost:3001/");
const user = await response.json();
// user = { name: <string>, age: <integer> }

console.log("Username =", user.name);
console.log("Age =", user.age);
