// -------------------------- Home work --------------------------
// -------------------------- Dobriak Anna --------------------------

/*1. Создать функцию multiply, которая будет принимать любое количество 
чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
Если нет ни одного аргумента, вернуть ноль: multiply() // 0
*/

function multiply() {

	if (!arguments.length) { return console.log('0'); }

	let a = 1;
	
	for (let i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] === 'number') {
			a *= arguments[i];
		}
	}			

	return a;
}	

multiply(6, 7, 8);

/*2.Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
*/

function reverseString(str) {

	if (typeof str !== 'string') { return console.log('Передайте строку'); }

	return str.split('').reverse().join('');
} 

reverseString('test');


/*3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
где каждый символ разделен пробелом и заменен на юникод-значение символа: 
getCodeStringFromText(‘hello’) // “104 101 108 108 111” 
подсказка: для получения кода используйте специальный метод 
*/

function getCodeStringFromText(str) {

	if (typeof str !== 'string') { return console.log('Передайте строку из букв'); }

	let charStr = ' ';

	for (let i = 0; i < str.length; i++) {
		charStr += str[i].charCodeAt()  + ' ';		
	}

	return charStr;
}

getCodeStringFromText('hello');


/*4. Создать функцию угадай число. Она принимает число от 1-10 
(обязательно проверить что число не больше 10 и не меньше 0). 
Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали 
то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. 
Числа в строке указаны как пример вы подставляете реальные числа.
*/

function checkNumb(x) {
	if (typeof x !== 'number' || x > 10 || x < 0 ) { return console.log('Передайте число от 1 до 10'); }

	let max = 10;
	let min = 1;
	let randomNum = Math.ceil(Math.random() * 10);
    	
	if ( randomNum === x) {
		return 'Вы выиграли';		
	} else {
		return 'Вы не угадали, ваше число ' + x + ' а выпало число ' + randomNum;		
	}
}

checkNumb(3);

/*5. Создать функцию, которая принимает число n и возвращает массив, 
заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
*/

function  getArray(n) {
	if (typeof n !== 'number' || isNaN(n)) { return console.log('Передайте число'); }

		let array = [];

		for (let i = 1; i <= n; i++) {
			array.push(i);
		}	
		
		return array;
}

 getArray(19);

/*6. Создать функцию, которая принимает массив, а возвращает новый массив с 
дублированными элементами входного массива:
doubleArray([1,2,3]) // [1,2,3,1,2,3]
*/

function doubleArray(arr) {
	if (!Array.isArray(arr)) { return console.log('Передайте массив'); }
		
	return arr.concat(arr);
}

doubleArray([4,9,6]);


/*7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет
 из каждого массива первый элемент, а возвращает массив из оставшихся значений: 
changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], 
changeCollection([1,2,3]) → [ [2,3] ] и т.д.
*/

function changeCollection() {

	let arr = [];
		
	for (let i = 0; i < arguments.length; i++) {
		if (!Array.isArray(arguments[i])) {
				return console.log('Передайте массив'); 
			} else {
				arr.push(arguments[i].slice(1));
		}
	}
	
	return arr;
}

changeCollection([1,2,3], [9,6,7]);

/*8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение 
на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с 
пользователями соответсвующие указанным параметрам.

funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , 
{name: “Ivan”, age: “20”, gender: “male”} ]
*/


function funcGetUsers(users, key, value) {

	if (!users.length)  { return console.log('Передайте массив пользователей '); }
	if (!key.length)  { return console.log('Передайте поле на которое хотети произвести проверку'); }
	if (!value.length)  { return console.log('Передайте значение на которое хотите произвести проверку'); }

	let newUsers = [];

	for (let i = 0; i < users.length; i++) {
		if (users[i][key] == value) {
			newUsers.push(users[i]);
		}
	}
		return newUsers;
	}

funcGetUsers( [ {name: 'Denis', age: '29', gender: 'male'} , 
{name: 'Ivan', age: '20', gender: 'male'} ], 'gender', 'male')


//-------------Функции высшего порядка-------------------
/*1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки
*/

function mainFunc(arr, callback) {
	if (!Array.isArray(arr)) return console.log('Передайте массив'); 

	let newArr = 'New value: ';

	for (let i = 0; i < arr.length; i++) {
		newArr += callback(arr[i]);
	}

	return newArr;
}

let mainRes1 = mainFunc(['my', 'name', 'is', 'Trinity'], function(item) {
	return item[0].toUpperCase() + item.slice(1);
});


let mainRes2 = mainFunc([10, 20, 30], function(item) {
	return item * 10 + ', ';
});

let mainRes3 = mainFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], function(item) {
	return item.name + ' is ' + item.age + ', ';
});

let mainRes4 = mainFunc(['abc', '123'], function(item) {
	return item.split('').reverse().join('') + ', ';

});
