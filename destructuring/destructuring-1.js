/* ! отработать хорошее определение деструктуризации */
/* ! порешать задачки */
/* ! отработать тему область видимости */

/* 1. ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ */

/* Без деструктуризации: */

const colors_1 = ["red", "green", "blue"];

const first1 = colors_1[0];
const second1 = colors_1[1];

console.log(first1); // red
console.log(second1); // green

/* С деструктуризацией: */

const colors_2 = ["red", "green", "blue"];

const [first2, second2] = colors_2;

console.log(first2); // red
console.log(second2); // green

/* Пропуск элементов */

const numbers1 = [10, 20, 30];

const [a, , c] = numbers1;

console.log(a); // 10
console.log(c); // 30

/* Остаточные элементы (Rest) */

const numbers2 = [1, 2, 3, 4, 5];

const [first3, ...rest1] = numbers2;

console.log(first3); // 1
console.log(rest1); // [2, 3, 4, 5]

/* Значения по умолчанию */

const numbers3 = [10];

const [d, e = 100] = numbers3;

console.log(d); // 10
console.log(e); // 100

/*Обмен переменных без временной переменной:*/

let f = 10;
let g = 20;

[f, g] = [g, f];

console.log(f); // 20
console.log(g); // 10

/* 2. ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ */

/* без неё: */

const user1 = {
   name: "Max",
   age: 25,
};

const name1 = user1.name;
const age1 = user1.age;

console.log(name1); // Max
console.log(age1); // 25

/* с ней: */

const user2 = {
   name2: "Max",
   age2: 26,
};
const { name2, age2 } = user2;

console.log(name2); // Max
console.log(age2); // 26

/* Переименование переменных */

const user3 = {
   name: "Max",
   age: 27,
};

const { name: userName, age: userAge } = user3;

console.log(userName); // Max
console.log(userAge); // 27

/* Значения по умолчанию */

const user4 = {
   name: "Max",
};

const { name, age = 18 } = user4;

console.log(name); // Max
console.log(age); // 18

/* Остаток свойств */

const user5 = {
   name: "Max",
   age: 28,
   city: "SPB",
};

const { name: name5, ...rest5 } = user5;

console.log(name5); // Max
console.log(rest5); // { age: 28, city: "SPB" }

/* Вложенная деструктуризация */

const user6 = {
   name: "Max",
   address: {
      city: "Moscow",
      street: "Lenina",
   },
};

const {
   address: { city, street },
} = user6;

console.log(city); // Moscow
console.log(street); // Lenina

/*
   Деструктуризация в параметрах функции
   Очень часто используется во фронтенде и React.
*/

function printUser({ name, age }) {
   console.log(`${name} ${age}`);
}

printUser({
   name: "Max",
   age: 25,
});

/* Часто встречается в работе с API */

const response = {
   data: {
      users: ["Alex", "John"],
   },
};

const {
   data: { users },
} = response;

console.log(users);
