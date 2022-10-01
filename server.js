const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

let todoList = ["task one", "task two"];

app.get("/", (request, response) => {
  response.render("index", { data: todoList });
});

app.post("/", (request, response) => {
  if (request.body.add) {
    todoList.push(request.body.text);
  } else if (request.body.done) {
    todoList.splice(request.body.done, 1);
  }
  // response.send(todoList);

  response.redirect("/");
});

app.listen(3000, () => {
  console.log("Serer started on port 3000");
});
