function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
function bonjour() {
  return "bonjour salama";
}

function bonsoir(instruction, name) {
  console.log(instruction() + name);
}
bonsoir(bonjour, "koulaya bah");
const foo = function () {
  console.log("il est vraiment foo ce mesieur!");
};
foo();

function coco() {
  return "cherie coco";
}

function mari(instruction, name) {
  console.log(instruction() + name);
}
mari(coco, "je tame mon cherie souley");

function mama() {
  return "ma maman cherie";
}

function papa(instruc, age) {
  console.log(instruc() + age);
}
papa(mama, 23);

function arbre() {
  return "je suis un arbre";
}

function tigre(instructions, name) {
  console.log(instructions() + name);
}
tigre(arbre, "qui a un nom de coctier");

function x() {
  return "je suis un x";
}

function Z(instruct, name) {
  console.log(instruct() + name);
}
Z(x, " je m appel un inconue");
// a hihger order function is function that return aother function

function a() {
  return function d() {
    console.log(
      "hi my name is a inner function inside a higher order function"
    );
  };
}
const myfunc = a();
myfunc();
// ---------------------------------------another function called higher order function
const hello = () => {
  return "hi mornig toi";
};

const morning = (functionpara, surname) => {
  console.log(functionpara() + surname);
};
morning(hello, " my surname is fatoumata");
// ---------------------

const time = (para) => {
  let t1 = Date.now();
  para();
  let t2 = Date.now();
  return t2 - t1;
};
const addOne = () => 1 + 1;
time(addOne);

// ---------------------------------
const timeFuncRuntime = (funcParameter) => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);

// -------------------------
const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits
fruits.forEach(function (fruitItem) {
  console.log(`I want to eat a mango ${fruitItem}`);
});

const contacts = ["name", "adresse", "location"];

contacts.forEach(function (contact) {
  console.log("je suis un contact " + contact);
});
// itterator are methode called on array tp manipulate and return value

const users = [
  {
    name: "diallo",
    location: "abofu",
  },
  {
    name: "diallo",
    location: "abofu",
  },
];

users.forEach(function (user) {
  return console.log("je suis moi " + user);
});
// the map iterator is a methode called on array that takes an argument of callback function and return an array
const numbers = [1, 2, 3];
const newBaby = numbers.map(function (number) {
  return number * 2;
  console.log();
});
//the findIndex methode----------------------
const numeros = [100, 13, 24, 2, 5];
const numberSup = numeros.findIndex(function (numero) {
  return numero < 10;
});
console.log(numberSup);

// -------------------
const fiches = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];
const elephants = fiches.findIndex((fiche) => {
  return fiche === "elephant";
});
console.log(elephants);
// ---------------------the map on the fiches array
const pinma = fiches.map((fiche) => {
  for (let i = 0; i < fiches.length; i++) {
    console.log(fiche[0]);
  }
});
console.log(pinma);
// -------------------------
const bols = ["zee", "bafata", "pore"];

const response = bols.map((bol) => {
  return "mon nom est " + bol;
});
console.log(response);
// --------------the foreach methode on bols
bols.forEach(function (bol) {
  console.log("mon nom moi est " + bol);
});
// -----------------the filter methode
const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];
const res = favoriteWords.filter((word) => {
  return word.length < 7;
});
console.log(res);
