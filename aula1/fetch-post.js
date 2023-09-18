const user = {
  "name": "João Lucas",
  "age": 29,
};

const response = await fetch("http://localhost:3001/", {
    method: "POST",
    body: JSON.stringify(user)
  }
);

console.log("STATUS =", response.status, response.statusText);
