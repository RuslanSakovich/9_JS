

favoriteFruits = ["grapefruit", "orange", "lemon"]; //созданный массив
  console.log(favoriteFruits);

favoriteFruits.push("tangerine", "melon"); //метод push добавляет элемент в конец массива
  console.log(favoriteFruits);
  console.log(favoriteFruits.length);

let lenghtOfFavoriteFruits = favoriteFruits.push("lime"); //добавление элемента массива, с сохранинием нового массива в переменной
  console.log(favoriteFruits);  



//splice метод для добавления элемента в определенный индекс
let arrOfhShapes = ["cat", "dog", "mous", "elefant"];

arrOfhShapes.splice(2,0, "giraffe", "monkey"); // 2 - в какой индекс вставлять, 0 - сколько элементов удалять после вставки новых

console.log(arrOfhShapes);
console.log(arrOfhShapes.length);
console.log(arrOfhShapes[3]);
console.log(arrOfhShapes[arrOfhShapes.length - 1]);

arrOfhShapes.splice(2, 4, "elefant", "monkey");

console.log(arrOfhShapes);

//метод concat добавление массива в массив
let arrFirst = [1, 2, 3];
let arrSecond = [4, 5, 6];

let arrTrid = arrFirst.concat(arrSecond);
console.log(arrTrid);

let arrFought = arrTrid.concat(10, 11, 12);
console.log(arrFought);

// удаление элементов
arrFought.pop(); //аргумент pop удаляет последний элемент
console.log(arrFought);

arrFought.shift(); //аргумент shift  удаляет первый элемент 
console.log(arrFought);

arrFought.splice(0, 5); // аргумент splice 0 - с какого индеса начать удаление, 5 - количество элементов кот. нужно удалить
console.log(arrFought);

delete arrFought[1]; // оператор delete способен изменить занчение определенной позиции на undefined
console.log(arrFought);


// ПОИСК ЭЛЕМЕНТО МАССИВА
let arr1 = [2, 6, 7, 8, 9, 1, 5, 6, 3, 7];
let findValue1 = arr1.find(function(e) {return e === 6}); // поиск числа 6 в массиве
let findValue2 = arr1.find(e => e === 10); // поиск числа 10 в массиве

console.log(findValue1);
console.log(findValue2);// т.к. числа 10 нет в массиве, то показывает undefined

// поиск на какой позиции стоит элемент
let findIndex1 = arr1.indexOf(7); // Поиск на какой позиции находится число 7
let findIndex2 = arr1.indexOf(10); // Поиск на какой позиции находится число 10
let findIndex3 = arr1.indexOf(6, 2); // показывает есть ли еще цифра 6 после 2го индекса

console.log(findIndex1, findIndex2, findIndex3);// -1 указывает, что числа 10 в массиве

// найти на какой позиции последнее совпадение
let animals = ["dog", "horse", "cat", "sheep", "dog"];
let lastDog = animals.lastIndexOf("dog");

console.log(lastDog);


// SORTING
let names = ["James", "Alicia", "Fatima", "Maria", "Bert"];
names.sort();
console.log(names);

names.reverse();
console.log(names);

