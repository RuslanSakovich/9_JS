/* 
1.Создайте массив - список продуктов в магазине
2. Добавте в список Milk, Bread, Apples
3. Замените Bread на Bananas и Eggs.
4. Удалите последний элемент массива и выведете его на экран
5. Отсортируйте список в алфавитном порядке
6. Найдите и выведете значение индекса Milk.
7. После Bananas добавте Carrot и Lettuce.
8. Создайте новый список, в котором будет Juice и Pop.
9. Объедените оба списка, добавив новый список дважды в конец первого списка.
10 Получите последнее значение индекс Pop и выведете его на экран.
*/

let myList = [];

myList.push("Milk", "Bread", "Apples");
console.log(myList);

myList.splice(1, 1, "Bananas", "Eggs");
console.log(myList);

myList.pop();
console.log(myList.indexOf("Milk"));
console.log(myList);

myList.sort();
console.log(myList);

console.log(myList.indexOf("Milk"));

myList.splice(1, 0, "Carrot", "Lettcue");

let secondList = ["Juice", "Pop"];

let finalList = myList.concat(secondList, secondList);
console.log(finalList);

console.log(finalList.lastIndexOf("Pop"));
console.log(finalList);