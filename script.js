let players = ["John", "Jane", "Mike"];
let person = {"name": "John", "age": 30};

let team = players;
let team1 = players.slice();
let cap1 = person;

console.log(team); // ["John", "Jane", "Mike"]
console.log(team1); // ["John", "Jane", "Mike"]
console.log(cap1); // {"name": "John", "age": 30}
