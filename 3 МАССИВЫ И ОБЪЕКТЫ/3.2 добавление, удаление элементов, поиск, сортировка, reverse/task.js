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

let buyList = [];
console.log(buyList);

buyList.push("Milk", "Bread", "Apples");
console.log(buyList);

buyList.splice(1, 1, "Bananas", "Eggs");
console.log(buyList);

console.log(buyList.length - 1);
console.log(buyList[3]);

buyList.pop();
console.log(buyList);

buyList.sort();
console.log(buyList);
console.log(buyList.indexOf("Milk"));

let findIndexMilk = buyList.indexOf("Milk");
console.log(findIndexMilk);

buyList.splice(1, 0, "Carrot", "Lettuce");
console.log(buyList);

let secondBuyList = ["Juice", "Pop"];
console.log(secondBuyList);

let totalBuyList = buyList.concat(secondBuyList).concat(secondBuyList);
console.log(totalBuyList);

let lastPop = totalBuyList.lastIndexOf("Pop");
console.log(lastPop);
