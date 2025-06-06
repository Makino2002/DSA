function validate(username, password) {
  var database = new Database();
  return database.login(username, password);
}

console.log(validate("man", 123));
