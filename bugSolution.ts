function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane User";

console.log(greeter(user)); // Works!

//Alternative solution
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(", ");
}

let users = ["Jane User", "John Smith"];
console.log(greeterArray(users)); // Works!