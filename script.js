// типы данных
// console.log() - чтобы отображать что то в консоль браузера
// 1) Number - число - сан
//  console.log(100);
//  console.log(0.5);
//  console.log(-5);

 // 2) String - строка

//  console.log("Argen");
//  console.log("Эшикте каар жаап жатат");

 // 3) Boolean - Булевой тип
 
//  console.log(true);
//  console.log(false);

 // 4) undefined - Не известный тип

//  console.log(undefined);

 // 5) null - Пустое значение 

//  console.log(null);

 // 6) bigInt - большие числа
 // big - чоң
 // integer - целое число

//  console.log(1512002121130213e26);

 // 7) Object - объект

//  console.log({name: "bakyt"});

 // 8) Symbol - символьный объект

//  console.log(Symbol( "Argen"));



// Переменные 

// let a = 10;
// let b = 5;

// console.log(a);
// console.log(b);
// console.log(a+b);

// let age = 30;
// age =10;
// age ="Tilek";

// console.log(age);

// let c = "100";
// console.log(c);

// var 

// var a = 10;

// console.log(a);

// console.log(b);

// var b = 10;

// let  firstName;

// console.log(firstName);

// const 

// const lastName = "Zhusupov"
// // lastName = "Aitmatov"

// console.log(lastName);


// const lastName = true;
// console.log(lastName);


// const a = -20;
// const b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);


//////////////////////
//  NUMBER - число 

// integer - целое число

//  Переменный - ячейка для хранение данных

//  Операторы 

// + кошуу

// - кемитүү

// * көбөйтүү

// / бөлүү

// //  ** - квадрат
// console.log(5 ** 5);

// % - Остаток деление
// console.log(55 % 7);
// console.log(-29 % 5);

// // > - больше 
// console.log(5 > 4);

// // < - меньше 
// console.log(6 < 4);
// console.log(1 < 200);

// // == - равно 
// console.log(5 == 5);
// console.log("6" == 6);

// // === - строгий равно   строготипизированный
// console.log("10" === 10);
// console.log("10" === "10");

// // <= - менше или равно 
// console.log("4" <= 5);

// // >= - больше или равно 
// console.log(4 >= 5);


///////////////////////////////////
// Math 

//Math.abs() - терс санды оң санга айландырат

// console.log(Math.abs(5));
// console.log(Math.abs(-5));
// console.log(Math.abs(-500));

//Math.pow () - степень  даража 

// console.log(Math.pow(3, 5));
// //3*3*3*3*3

// console.log(Math.pow(4, 4));
//4*4*4*4

// NaN - Not a Number

// Math.sqrt() - корень
// console.log(Math.sqrt(64));
// console.log(Math.sqrt(200));
// console.log(Math.sqrt(50));

// let mat = 125
// console.log(mat * 5);
// // 4. Создайте переменную с числом и проверьте, является
// // ли оно четным. Выведите результат в консоль.
// let s = 60
// if (s%2 == 0){
//     console.log("Чётный");
// }else{
//     console.log("Не чётный");
// }

// // 5. Создайте переменную с числом и проверьте, является
// // ли оно положительным или отрицательным. Выведите результат в консоль.
// let num5 = 1;
// console.log(num5 > 0 ? "Положительное" : num5 < 0 ? "Отрицательное" : "Ноль");
// // 6. Создайте переменную с дробным числом и округлите его
// // до целого. Выведите результат в консоль.
// let q = 0.001
// console.log(Math.ceil(q));
// // 7. Создайте переменную с числом и возведите его в квадрат.
// // Выведите результат в консоль.
// let w = 20
// console.log(w ** 2);
// // 8. Создайте переменную с числом и найдите его квадратный корень.
// // Выведите результат в консоль.
// let e = 625
// console.log(Math.sqrt(e));
// // 9. Создайте переменную с числом и проверьте, является ли оно простым.
// // Выведите результат в консоль.

// // 10. Создайте переменную с числом и найдите его факториал. Выведите
// // результат в консоль.

// // 11. Создайте переменную с числом и  выведите сообщение "Делится на 5",
// // если число делится на 5, и "Не делится на 5" в противном случае.
// let r = 26
// if (r%5 == 0){
//     console.log("Делится на 5");
// }else{
//     console.log("Не делится на 5 ");
// }
// // 12. Создайте переменную с числом и выведите сообщение "Больше 100",
// //"Меньше 100" или "Равно 100", в зависимости от значения числа.
// let t = 101
// if (t > 100){
//     console.log("Больше 100");
// }else if(t<100){
//     console.log("Меньше 100");
// }else if(t== 100){
//     console.log("Равно 100");
// }

// // 13. Создайте переменную с числом и выведите сообщение "Положительное",
// //"Отрицательное" или "Ноль", в зависимости от знака числа.
// let pol = -1
// if (pol > 0){
//     console.log("Положительное");
// }else if(pol<0){
//     console.log("Отрицательное");
// }else if(pol== 0){
//     console.log("Ноль");
// }
// // 14.  Создайте две переменную с числоми и выведите сообщение "Первое число
// //больше второго", "Второе число больше первого" или "Числа равны".
// let l = 101
// let j = 101
// if (l > j){
//     console.log("Первое число больше второго");
// }else if(l<j){
//     console.log("Второе число больше первого");
// }else if(l== j){
//     console.log("Числа равны");
// }
// // 15.  Вам дана переменная a=-2. Составьте условие, по которому в консоль
// // будет выводиться 'positive' - если число больше 0,
// // 'равно' если число равно 0, "negative" если число меньше 0.
// let po = -2
// if (po > 0){
//     console.log("positive");
// }else if(po<0){
//     console.log("negative");
// }else if(po== 0){
//     console.log("равно");
// }
// // 16. Вам даны переменные a=10 и b=2. Выведите в консоль их произведение.
// let z = 10
// let x = 2
// console.log(z / x);
// // 17. Вам даны переменные c=15 и d=2. Просуммируйте их, а результат присвойте
// // переменной result. Выведите в консоль значение переменной result.
// let c = 15
// let v = 2
// let result = c + v
// console.log(result);
// // 18. Вам даны переменные a='10' и b='99'. Сложите переменные a и b и присвойте результат
// // переменной result и выведите её в консоль.
// let qw = "10"
// let er = "99"
// let result2 = qw + er
// console.log(result2);
// // 19. Вам даны a='10' и b='99'. Сложите переменные a и b и присвойте результат
// // переменной result и выведите её в консоль.

// //20.Вам даны переменные a=10, b=2 и c=5. Выведите в консоль их сумму.
// let f = 10
// let h = 2
// let m = 5
// console.log(f + h + m);


// const month = 5;

// if ((month > 0 && month <3) || month == 12) {
//  console.log("Зима");   
// } else if ((month > 2 && month < 6)) {
//     console.log("Весна");
// } else if ((month > 5 && month < 9)) {
//     console.log("Лето");
// } else if ((month > 8 && month < 12)) {
//     console.log("Осень");
// } else {
//     console.error("Ошибка")
// }



// 1.Создайте переменные x и y с любыми значениями. Проверьте, истинно ли выражение (x > 0) && (y < 10)?

// let x = 10;
// let y = 3;
// console.log(x > 0 && y < 10);

// 2.Даны две переменные: age и isStudent. Напишите условие, которое возвращает true, если человек старше 18 лет и он не студент.

// let age = 19
// let isStudent = false

// console.log(age > 18 && isStudent == false);


// 3.Создайте переменные a и b с различными числовыми значениями. Проверьте, равны ли они друг другу или оба больше 5.

// let a = 15;
// let b = 20;
// console.log(a == b || (a && b > 5));

// 4.Напишите условие, которое возвращает true, если строка str содержит слово "JavaScript" и имеет длину более 10 символов.

// const  str = "JavaScript"

// console.log(str.length === 10);

// 5.Создайте переменные isSunny и temperature. Напишите условие, которое вернет true, если сейчас солнечно и температура выше
//  25 градусов по Цельсию.

// let isSunny = true;
// let temperature = 25;
// console.log(isSunny == true && temperature > 25);

// 6.Даны переменные isMember (является ли человек членом клуба) и age (возраст). Напишите условие, при котором человек
//  может получить скидку, если он является членом клуба или его возраст меньше 18 лет.

// let isMember = false
// let age = 17 
// console.log(isMember == true || age < 18);

// 7.Пусть есть переменная username. Напишите условие, которое вернет true, если username не пуст и содержит не менее 5 символов.

// const  username = "JavaScript"

// console.log(username.length >= 5);

// 8.Создайте переменную number и напишите условие, которое вернет true, если число является четным и делится на 5.

// const number = 60;
// console.log(number % 2 == 0 && number % 5 == 0);

// let number = 40
// console.log(number % 2 == 0 && number % 5 == 0);

// 9.Даны три числа: a, b, и c. Напишите условие, которое вернет true, если хотя бы два из них равны между собой.

// let q = 15;
// let w = 15;
// let e = 20;
// console.log(q == w || w == e || q == e );


// 10.Пусть есть переменная isEven (является ли число четным) и isPositive (является ли число положительным). Напишите
//  условие, которое вернет true, если число четное и положительное.

// let isEven = true;
// let isPositive = true;
// let d = 10;
// console.log(d % 2 == 0 && d > 0 && isEven && isPositive);


////////////////////

// String - Строка 
// ""
// ''
// ``

// const str = "hello world";
// const str2 = `hello`;

// const str3 = `${str2}Argen!`;

// console.log(str);
// console.log(str2); 
// console.log(str3);



// Строки:
// 1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной в консоль.

// const str = `'Привет, Мир!'`
// console.log(str);

// 2. Вам даны переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.

// let str1 =  "Привет,"
// let str2 = `" ${str1}Мир!"`
// console.log(str2);

// 3. Вам дана переменная name, присвойте ей ваше имя. Выведите в консоль фразу 'Привет, *Имя*!'.

// let name = "*Bekmat*!"
// let str3 = `"Привет,${name}"`
// console.log(str3);


// 4. Вам дана переменная age , присвойте ей ваш возраст. Выведите в консоль 'Мне *Возраст* лет!'.

// const age = "* 19 *"
// const agb = `"Мне ${age} лет!"`
// console.log(agb);

// 5. Вам даны четыре переменные.
// Первая - для хранения количества дней. Присвойте ей значение "365".
// Вторая - для хранения названия нашей планеты "Земля".
// Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
// Четвертая - для хранения слова "Солнце".
// Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
// "В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."

// const a = "365"
// const b = "Земля"
// const v = "7 млрд."
// const g = "Солнце"
// const d = `"В нашем году ${a} дней. Днём у нас светит ${g}. Население планеты ${b} составляет примерно ${v} человек."`
// console.log(d);

// Typeof:
// 1. Вам дана переменная a=50. Выведите в консоль тип значения этой переменной.
// 2. Вам даны переменные a=10, b=35. Создайте переменную result, и сделайте так, чтобы в консоли значение переменной result было string.
// 3. Вам дана переменная a=10, выведите в консоль тип этой переменной - string.



// let str = "motion";

// console.log(str.slice(0,3).toLocaleUpperCase() );

// let sts = prompt("Enter text...");
// console.log(sts[0].toUpperCase() + sts.slice(1,-1).toLocaleLowerCase() + sts[sts.length -1].toLocaleUpperCase());


// let first = +prompt("Enter first number...");
// let symbol = prompt("Enter symbol'+,-,*,/'");
// let second = +prompt("Enter second number...");

// if (symbol === "+"){
//     console.log(first + second);
// } else if (symbol === "-"){
//     console.log(first - second);
// } else if (symbol === "*"){
//     console.log(first * second);
// } else if (symbol === "/"){
//     console.log(first / second);
// } else {
//   console.log("error");
// }



// ! Задание 1
// Создайте переменные firstNum, secondNum, thirdNum и присвойте им числовые значения.
// Выведите в консоль число с наибольшим значением.
// Например: если в firstNum будет хранится число 5, в secondNum 3,
// а в thirdNum 16, то вывод в консоль должен быть:
// Максимальное число 16
// Учтите возможность равенства всех трех чисел. 

// let firstNum = +prompt("Enter first number...");
// let secondNum = +prompt("Enter second number...");
// let thirdNum = +prompt("Enter third number...");

// let maxNum = Math.max(firstNum, secondNum, thirdNum);

// console.log(`Максимальное число ${maxNum}`);



//! Задание 2
// Создайте переменную lang и присвойте ей значение
// en или ru или de или kg используя тернарный оператор
// выведите сообщение в зависимости от значения lang
// lang = 'en' выведет 'This is english'
// lang = 'ru' выведет 'Это русский'
// lang = 'de' выведет 'Das ist Deutsch'
// lang = 'kg' выведет 'Бул кыргыз тили'

// let lang = prompt ("lang...")

// if (lang == 'en' ){
//     console.log('This is english');
// } else if (lang == 'ru'){
//     console.log('Это русский');
// } else if (lang == 'de'){
//     console.log( 'Das ist Deutsch');
// } else if (lang == 'kg'){
//     console.log('Бул кыргыз тили');
// } 
// else{
//     console.error("Ката жаздыңыз!!!");
// }

//! Задание 3
// let price = 600; // присваиваем значение цены
// let discount = 15; // присваиваем значение скидки

// let price = prompt("Баасы");
// let discount = prompt("Скидка");
// let str = price - (price / 100 * discount) ;
// console.log(str);


//! Задание 4. Напишите программу, которая будет принимать 2 значения через prompt:
// первое - размер зарплаты сотрудника, второе: стаж работы. В случае, если стаж работы меньше 1 года, надбавка не начисляется, в случае если стаж работы от 1 до 3х лет, надбавка будет 10%, если стаж работы от 3х до 5 лет, то надбавка 15%, в случае, если стаж работы от 5 лет и более, надбавка будет 20%. В итоге в alert вам нужно вывести величину зарплаты с учетом надбавки
// let str = +prompt("Размер зарплаты")
// let sts = +prompt("Стаж работы")

// if ((sts > 0 && sts <3)) {
//     let stt = alert(str+(str/100*10));   
//    } else if ((sts > 2 && sts < 5)) {
//     let stt = alert(str+(str/100*15));
//    } else if ((sts >= 5 )) {
//     let stt = alert(str+(str/100*20));
//    }

// ! Задание 5
// Напишите программу, которая проверяет, является ли введенное число четным или нечетным, используя оператор «%». Выведите «Число ${число} четное», если число делится на 2. Иначе выведите «Число ${число} нечетное», если число возвращает остаток при делении на 2

// let s = prompt("Enter first number...")
// if (s%2 == 0){
//     console.log(`Число ${s} четное`);
// }else{
//     console.log(`Число ${s} нечетное`);
// }

//! Задание 6
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.

// let email = prompt("Введите логин")

// if ( email == "admin"){
//     let password = prompt("Введите пароль")

//     if (password == "bekmat"){
//         console.log("Здравствуйте!");
//     }  
//     else{
//         alert("Неверный пароль")
//         console.log("Отменено");

//     }
// } else{
//     alert("Я вас не знаю")
//     console.log("Отменено");
// }

//! Задание 7
// Используя тернарный оператор выведите в консоли прогноз погоды. К примеру, если переменная temperature равна -10, вывести "Температура воздуха опустится до -10 градусов".

// let temperature = prompt("прогноз погоды")

// if (temperature < 0){
//     console.log(`"Температура воздуха опустится до ${temperature} градусов"`);
// } 
// else if(temperature > 0){
//     console.log(`"Температура воздуха повышается до ${temperature} градусов"`);
// }else{
//     console.log("Температура воздуха 0 градусов");
// }

// Методы string

//.length - выдает длину строки

// const str = "hello World";
// console.log(str.length);

// .startsWith() - проверяет с начало текста что есть такая строка которое мы передали и выдает булевой тип

// const str2 = "Mannapov Aibek"
// console.log(str2.startsWith("Mannapov Aibe"));

// .endsWith() - проверяет с конец текста что есть такая строка которое мы передали и выдает булевой тип

// const academy = "Motion Web"
// console.log(academy.endsWith("Web"));

// .includes() - проверяет содержит ли строка заданную под строку

// const text = "Кыш келди."

// console.log(text.includes("."));

// .slice() - бул бизге кайсыл индекстен кайсыл индекске чейинки строканы кесип берет

// const title = "Мен бугун окууга келдим" 
// console.log(title.slice(4)); 
// console.log(title.slice(8)); 
// console.log(title.slice(100)); 
// console.log(title.slice(0,3)); 
 
// const firstName= "Aziza" 
// console.log(firstName.slice(-1)); 
// console.log(firstName.slice(1,-1));
// console.log(firstName.slice(2,-2)); 
// console.log(firstName.slice(4,0)); 
 
//substr() - бул бизге кайсыл индекстен баштап канча строка керек болсо ошол жерин кесип берет
// const subs = "Биз бугун паркка барабыз" 
// console.log(subs.substr(10,3)); 
// console.log(subs.substr(3,10));

// .substring() - slice сыяктуу эле иштейт бирок экоонун айрымасы .substring() - тескери тартипте деле иштей берет

// const description = "Менин атым Бекмат"


// console.log(description.substring(0, 5));
// console.log(description.slice(0, 5));
// console.log(description.substring(5, 0));
// console.log(description.slice(5, 0));

 // .charAt() - 

// const name = "Abdulla"

// console.log(name[0]);
// console.log(name[100]);

// console.log(name.charAt(0));
// console.log(name.charAt(5));
// console.log(name.charAt(100));

// .split()

// const myName = "bolot"

// console.log(myName.split());
// console.log(myName.split(""));
// console.log(myName.split("l"));

///////////////////////////////////////////////////////////////////////////////

// // 1. Создайте переменную со строкой и выведите ее в нижнем регистре.

// const a = "BEKMAT"

// console.log(a.toLowerCase());

// // 2. Создайте переменную со строкой и выведите ее в верхнем регистре.

// const b = "bekmat"

// console.log(b.toUpperCase());

// // 3. Создайте переменную со строкой и выведите первые 5 символов.

// const q = "Кыргызстан"

// console.log(q.slice(0, 5));

// // 4. Создайте переменную со строкой и выведите последние 3 символа.

// const w = "Кыргызстан"

// console.log(w.slice(-3));

// // 5. Создайте переменную со строкой и проверьте, содержит ли она слово "World".

// const e = "hello World"

// console.log(e.includes("World"));

// // 6. Создайте переменную со строкой и проверьте, содержит ли она символ "o".

// const r = "hello World"

// console.log(r.includes("o"));

// // 7. Создайте переменную со строкой и выведите все символы, начиная с 3-го и заканчивая 8-м.
// let text = "Создайте переменную"
// console.log(text.slice(3, 8));
// // 8. Создайте переменную со строкой и проверьте, начинается ли она с "Hello".

// let t = "Hello World"

// console.log(t.startsWith("Hello"));

// // 9. Создайте переменную со строкой и проверьте, заканчивается ли она на "World".

// let y = "Hello World"

// console.log(y.endsWith("World"));

// // 10. Создайте переменную со строкой и проверьте, является ли она пустой.

// let u = "kjhhbnjkjhnmj"

// if (u == ""){
//     console.log("Строка пустой");
// } else{
//     console.log(u);
// }

// // 11. Создайте переменную со строкой и проверьте, состоит ли она только из цифр.

// let i = "68426584"

// if (i == ""){
//     console.log("Строка пустой");
//   }
//  else if( i >= 0 || i <= 0 ){
//     console.log("состоит только из цифр");
//  } else{
//     console.log("Не состоит только из цифр");
//   }
// // 12. Создайте переменную со строкой и проверьте, содержит ли она символ "@".

// const o = "hello Wor@ld"

// if (o.includes("@")){
//     console.log("содержит символ '@'");
// } else{
//     console.log("Не содержит символ '@'");
// }


// // 13. Создайте переменную со строкой и проверьте, является ли она длиннее 10 символов.

// let p = "переменную со строкой и проверьте,"

// if (p.length > 10){
//     console.log("является длиннее 10 символов.");
// } else{
//     console.log("Не является длиннее 10 символов.");
// }

// // 14. Создайте переменную со строкой и проверьте, содержит ли она символ "x" или "X".

// let x ="переменную со x строкой и проверьте,"

// if (x.includes("x"||"X")){
//     console.log("содержит символ 'x' или 'X'");
// } else{
//     console.log("Не содержит символ 'x' или 'X'");
// }

// // 15. Создайте переменную со строкой и проверьте, является ли она строкой-палиндромом (читается одинаково слева направо и справа налево).

//  let st = "hello" 
// console.log(st.substring(5,0)); 

// // 16. Создайте переменную со строкой и проверьте, содержит ли она подстроку "lo".

// let str = "login" 
// console.log(str.includes("lo"));

// // let n = "Hello"
// // console.log(n.includes("lo"));
// // 17. Создайте переменную со строкой и проверьте, является ли она строкой с пробелами.
 
// let tr ="tetto  " 
// if (tr.includes(" ")){ 
//     console.log("является строкой с пробелами"); 
// } 
// else { 
//     console.log("не является строкой с пробелами"); 
// } 

// // 18. Создайте переменную со строкой и проверьте, начинается ли она с пробела.

// let sts = " hello" 
// console.log(sts.startsWith(" ")); 

// // 19. Создайте переменную со строкой и проверьте, заканчивается ли она пробелом.

// let s1 = "hello " 
// if(s1.endsWith(" ")){ 
//     console.log("заканчивается пробелом"); 
// }else{ 
//     console.log("не заканчивается пробелом"); 
// } 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Function

// function sayHello(){
//  return "hello"
// }

// console.log(sayHello());


// function ageHello(){
//     return 30;
//    }
   
//    console.log(ageHello());
//    console.log(ageHello());
//    console.log(ageHello());
//    console.log(ageHello());
//    console.log(ageHello());



   
// function name(){
//  return "Бектемиров Бекмат Мааратбекович"
// }

// console.log(name());

// // HOSTING
// console.log(name());

// function name(){
//  return "Бектемиров Бекмат Мааратбекович"
// }

// //Параметры

// function getName(name){
//     return `Привет ${name} `
// }

// console.log(getName("Argen"));

// function getSum(a, b){
//     return a + b
// }

// console.log(getSum(30, 5));
// console.log(getSum("Argen", "Bekmat"));



// // 1. Генерация случайного числа:
// // Напишите функцию, которая генерирует случайное целое число в заданном диапазоне.

// function getnumber(num){
// return Math.floor(Math.random()*num)
// }

// console.log(getnumber(1000));

// // 2. Сложение двух чисел:
// // Напишите функцию, которая принимает два числа и возвращает их сумму.

// function getSum(a, b){
//  return a + b
// }
    
//  console.log(getSum(30, 5));

// // 3. Проверка на четность:
// // Напишите функцию, которая проверяет, является ли число четным.

// function isEven(s){
//     return s % 2 == 0;
//    }

//    console.log(isEven(60));

// // 4. Возведение в степень:
// // Напишите функцию, которая принимает число и степень, в которую нужно возвести число.

// function pow(q, w){
//     return q ** w;
//    }

//    console.log(pow(5, 5));

// // 5. Деление нацело:
// // Напишите функцию, которая выполняет деление двух чисел и возвращает только целую часть результата.

// function getSum(a, b){
//     return Math.floor( a / b)
//    }
       
//     console.log(getSum(29, 5));

// // 6. Генерация случайной строки:
// // Напишите функцию, которая генерирует случайную строку заданной длины.



// // 7. Поиск максимального числа:
// // Напишите функцию, которая принимает два числа и возвращает большее из них.

// function log(a, b){
//     return Math.max( a, b)
//    }
       
//     console.log(log(29, 5));

// // 8. Проверка на простое число:
// // Напишите функцию, которая проверяет, является ли заданное число простым.

// function log(a){
//     return a % a == 1 && a % 1 == 1
//    }
       
//     console.log(log(7));


// // 9. Округление числа:
// // Напишите функцию, которая округляет число до заданного количества знаков после запятой.

// function task(n){
//     return Math.random().toFixed(n)
//    }
       
//     console.log(task(2));

// // 10. Сравнение строк:
// // Напишите функцию, которая сравнивает две строки и возвращает true, если они идентичны.

// function bask(a, b){
//     return a == b
//    }
       
//     console.log(bask(30, 30));

// // 11. Умножение двух чисел:
// // Напишите функцию, которая принимает два числа и возвращает их произведение.

// function rob(a, b){
//     return a * b
//    }
       
//     console.log(rob(30, 30));


// // 12. Проверка на число:
// // Напишите функцию, которая проверяет, является ли переданное значение числом.

// function rok(a){
//     if (typeof rok == "namber"){
//         return "true";
//     } else{
//         return false
//     }
//    }
       
// console.log(rok(25523));

// // 13. Деление числа на другое число:
// // Напишите функцию, которая выполняет деление двух чисел и возвращает результат.

// function rob(a, b){
//     return a / b
//    }
       
//     console.log(rob(30, 30));

// // 14. Извлечение подстроки:
// // Напишите функцию, которая извлекает подстроку из заданной строки с определенными индексами.

// function ros(a){
//     return a.substr(5)
//    }
       
//     console.log(ros("hello world"));

// // 15. Форматирование числа:
// // Напишите функцию, которая форматирует число, добавляя разделители тысяч.



// // 16. Возведение числа в квадрат:
// // Напишите функцию, которая принимает число и возвращает его квадрат.

// function roc(a, b){
//     return a ** b
//    }
       
//     console.log(roc(3, 3));

// // 17. Удаление пробелов:
// // Напишите функцию, которая удаляет все пробелы из строки.

// function ro(a){
//     return a.replaceAll(" ", "")
//    }
       
//     console.log(ro("Напишите функцию, которая удаляет все пробелы из строки."));

// // 18. Смена знака числа:
// // Напишите функцию, которая меняет знак числа на противоположный.

// function row(a, b){
//     return  Math.abs(a - b)
//    }
       
//     console.log(row(3, 5));


// // 19. Генерация случайного оператора:
// // Напишите функцию, которая генерирует случайный математический оператор (+, -, *, /).

// function isRandom(){
//     let operations = ["+", "-", "*", "/"]
    
//     return operations [Math.floor(Math.random()*operations.length)]
// }

// console.log(isRandom());

// // 20. Реверс числа:
// // Напишите функцию, которая переворачивает порядок цифр в числе.
// // 21. Подсчет количества цифр в числе:
// // Напишите функцию, которая подсчитывает количество цифр в заданном числе.

// function count(b){
//     return b.toString(Math.abs)
// }

// // 22. Проверка на отрицательное число:
// // Напишите функцию, которая проверяет, является ли число отрицательным.

// function isSunny(a){
//     if ( a < 0 ){
//         return "отрицательный";
//     } 
//     else if (a > 0){
//         return "Положительный"
//     }
//      else{
//         return "Ноль"
//     }
//    }
       
// console.log(isSunny(1));

// // 23. Нахождение корня числа:
// // Напишите функцию, которая находит квадратный корень числа.

// function firstName(a) {
//     return Math.sqrt(a)
//   }
//   console.log(firstName(200))

// // 24. Поиск минимального числа:
// // Напишите функцию, которая находит меньшее из двух чисел.

// function lastName(a, b) {
//     return Math.min(a, b)
//   }
//   console.log(lastName(25, 6))

// // 25. Конкатенация строк:
// // Напишите функцию, которая принимает две строки и объединяет их.

// function name(a, b) {
//     return a+b
//   }
//   console.log(name("Erbol", "Aibek"))

// // 26. Поиск длины строки:
// // Напишите функцию, которая возвращает длину заданной строки.

// function sts (d){
//     return d.length
// }

// console.log(sts("bekmat"));

// // 27. Поиск среднего значения:
// // Напишите функцию, которая находит среднее арифметическое двух чисел.

// function isStudent (d){
//     return d / 2
// }

// console.log(isStudent(100));

// // 28. Увеличение числа на 10%:
// // Напишите функцию, которая увеличивает число на 10%.

// function isMember (d){
//     return (d / 100 * 10) + d
// }

// console.log(isMember(100));


// // 29. Удаление последнего символа строки:
// // Напишите функцию, которая удаляет последний символ из заданной строки.

// function isPositive (d){
//     return d.slice(0, -1)
// }

// console.log(isPositive("jakshylyk"));

// // 30. Смена регистра:
// // Напишите функцию, которая меняет регистр всех символов строки.


// function registr(s){
//     let b = '';
//   if (s == s.toLowerCase()){
//     b += s.toUpperCase()
//     return b
//   } else {
//     b += s.toLowerCase()
    
//    return b
//   }

// }
// console.log(registr("RFGHJK"));



////////////////////////////////////////////////////////////////////

// Arrow funtion - стрелочное функция

// function getName(name){
//     return `Hello ${name} `
// }
// console.log(getName("Bekmat"));
// console.log(getName("Erbol"));
// console.log(getName("Aibek"));



//////////////////////////////////////////////////////////

// 1. Создайте стрелочную функцию, которая принимает строку и возвращает ее длину.

// const isEven = (s) => {
//     return s.length
// }
// console.log(isEven("Bekmat"));

// 2. Напишите стрелочную функцию, которая принимает две строки и возвращает их объединение.

// const isMember = (s, d) => {
//     return s + d
// }
// console.log(isMember("Bekmat", "Syimyk"));

// 3. Создайте стрелочную функцию, которая принимает число и возвращает его квадрат.

// const isPositive = (s) => {
//     return s ** 2
// }
// console.log(isPositive(8));

// 4. Напишите стрелочную функцию, которая принимает два числа и возвращает их сумму.

// const isSunny = (s, d) => {
//     return s + d
// }
// console.log(isSunny(2, 3));


// 5. Создайте стрелочную функцию, которая принимает строку и возвращает ее в верхнем регистре.

// const is = (s) => {
//     return s.toUpperCase()
// }
// console.log(is("fgbhnjk"));


// 7. Создайте стрелочную функцию, которая принимает число и возвращает true, если оно четное, и false в противном случае.

// const ist = (s) => {
//     return s % 2 === 0
// }
// console.log(ist(6));

// 8. Напишите стрелочную функцию, которая принимает два числа и возвращает большее из них.

// const ists = (s, d) => {
//     return Math.max(s, d)
// }
// console.log(ists(26, 25));

// 9. Создайте стрелочную функцию, которая принимает строку и возвращает ее обратно.

// const getName = (s) => {
//     return s
// }
// console.log(getName("Erbol"));

// 12. Напишите стрелочную функцию, которая принимает два числа и возвращает их разницу.

// const getnumber = (s, d) => {
//     return s - d
// }
// console.log(getnumber(26, 25));

// 15. Создайте стрелочную функцию, которая принимает строку и возвращает ее длину без учета пробелов.

// const getSum = (s) => {
//     let num = Math.abs(s).toString();

//     return num.length;
// }
// console.log(getSum("   2552"));

// 16. Напишите стрелочную функцию, которая принимает два числа и возвращает произведение.

// const age = (s, d) => {
//     return s * d
// }
// console.log(age(26, 25));

// // 18. Напишите стрелочную функцию, которая принимает число и возвращает строку "positive", "negative" или "zero", в зависимости от знака числа.

// const isStudent = (a) => {
//     if ( a < 0 ){
//         return "negative";
//     } 
//     else if (a > 0){
//         return "positive"
//     }
//      else{
//         return "zero"
//     }
//    }
//    console.log(isStudent(1));

// 20. Напишите стрелочную функцию, которая принимает строку и возвращает ее в обратном порядке.

// 21. Создайте стрелочную функцию, которая принимает два числа и возвращает их среднее арифметическое.

// const getage = (s, d) => {
//     return (s + d) / 2
// }
// console.log(getage(10, 5));


// 24. Напишите стрелочную функцию, которая принимает два числа и возвращает true, если их сумма четная, и false в противном случае.

// const istsw = (s, f) => {
//     return (s + f) % 2 === 0
// }
// console.log(istsw(5, 5));

// 25. Создайте стрелочную функцию, которая принимает строку и возвращает true, если она является палиндромом, и false в противном случае.

//////// function expretion

////
// const getTime = () =>{
//     return "12:42"
// }

// const day =



// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?». 
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!

// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:

// const getTime = (a) =>{
//        if (a.startsWith("R" || "r")){
//         return "вы играете на банджо!"
//        } else{ 
//         return "вы не играете на банджо!"
//        }
//     }
    
//     console.log(getTime("Robert"));

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12


// const makeNegative = function (a){
//     if (a>0){
//      return("-" + a)
//     } 
//     else if(a<0) { 
//      return (a)
//     }
//  }
 
//  console.log(makeNegative(52));


//  Натан любит кататься на велосипеде.

// Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.

// Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.

// Например:
// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5



// function task(a, b){
//     if (a == b) {
//     return a*b
// }
// return (a+b)*2
// }
// console.log(task(5, 5));


// Боб работает водителем автобуса. Тем не менее, он стал чрезвычайно популярен среди жителей города. С таким количеством пассажиров, желающих сесть в его автобус, ему иногда приходится сталкиваться с проблемой нехватки места в автобусе! Он хочет, чтобы вы написали простую программу, сообщающую ему, сможет ли он разместить всех пассажиров.

// Обзор задачи:

// Вам нужно написать функцию, которая принимает три параметра:
// cap — это количество человек, которое может вместить автобус, не считая водителя.
// on - количество людей в автобусе, не считая водителя.
// wait - это количество людей, ожидающих посадки в автобус, исключая водителя.

// Если места достаточно, вернуть 0, а если нет, вернуть количество пассажиров, которых он не может взять.

// Примеры использования:

// cap = 10, on = 5, wait = 5 --> 0 # Он может вместить всех 5 пассажиров cap = 100, on = 60, wait = 50 --> 10 # Он не может вместить 10 из 50 ожидающих

// function isEven(a, b, g){

//  let get = a - b

//    if ( get >=g) {
//     return `Он  может вместить всех ${g} пассажиров`
//    }
//     return `Он не может вместить всех ${g - get} пассажиров`
   

// }
// console.log(isEven(10, 5, 6));


///////////////////////////////////////////////////////


//////////////////////////////////////////////////////////// Массив /////////////////////////////////////////////////////////////////////////////

// // array - массив - []
// // // Методы - массива


// // const arr = [1,2,3,4,5,false,[123,4,5],"",{}]

// // console.log(arr);
// // console.log(arr[0]);
// // console.log(arr[arr.length -1]);
// // const str = "Car"
// // console.log(str[0]);
// // console.log(str[arr.length -1]);

// // const st = "100"
// // const number = 10
// // const object = {}
// // const array = []
// // const nul = null
// // const undef = undefined

// // console.log();
// // console.log();
// // console.log();
// // console.log();
// // console.log();
// // console.log();




// // Array - методы

// // .concat()
// // const arr1 = [1,2,3]
// // const arr2 = [3,4,5]

// // spreed operator
// // const newArr = [...arr1,...arr2]
// // console.log(newArr);

// // .splice()
// // const names = ["Argen","Freya","Bakyt","Masha","Samat","Luntik"]
// // names.splice(0,1, "Nagima")
// // names.splice(3,1,"Bekmat","Erbol","Aibek")
// // console.log(names);

// // .reverse()
// // .join()

// // const numbers = [1,2,3,4,5,6,7,8,9,0]

// // console.log(numbers.reverse());
// // console.log(numbers.join(" . "));

// // 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// const arr = ['a', 'b', 'c']
// arr.push(1, 2, 3)
// console.log(arr);

// // 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// console.log(arr1.concat(arr2));

// // 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// const arr3 = [1, 2, 3]
// arr3.push(4, 5, 6)
// console.log(arr3);

// // 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// const arr4 = [1, 2, 3]
// arr4.unshift(4, 5, 6)
// console.log(arr4);

// // 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// const arr5 = ['js', 'css', 'jq']

// console.log(arr5[0]);

// // 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// const arr6 = ['js', 'css', 'jq']

// console.log(arr6[arr6.length -1]);

// // 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в
// // новый элементы [1, 2, 3].

// const arr7 = [1, 2, 3, 4, 5]

// console.log(arr7.slice(0,3));

// // 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// // элементы [4, 5].

// const arr8 = [1, 2, 3, 4, 5]

// console.log(arr8.slice(3,5));

// // 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте
// // массив в [1, 4, 5].

// const arr9 = [1, 2, 3, 4, 5]
// arr9.splice(1,2)
// console.log(arr9);

// // 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в
// // новый массив элементы [2, 3, 4].

// const arr10 = [1, 2, 3, 4, 5]

// console.log(arr10.splice(1,3));

// // 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// // массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// const arr11 = [1, 2, 3, 4, 5]
// arr11.splice(3,0,'a', 'b', 'c',)
// console.log(arr11);

// // 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// // сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// const arr12 = [1, 2, 3, 4, 5]
// arr12.splice(1,0,'a', 'b',)
// arr12.splice(6,0,'c',)
// arr12.splice(8,0,'e',)
// console.log(arr12);


// // Задание №2
// // Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.

// const arr13 = ['а', 'б', 'в']
// arr13.push( 4,3,5,5)
// console.log(arr13);

// // Задание №3
// // Дан массив ["Apple", "Orange", "Pinapple", "Cherry"]. 
// //Удалите сначала первый элемент "Apple" и этот же элемент подставтье после "Pineapple".

// const arr14 = ["Apple", "Orange", "Pinapple", "Cherry"]
// arr14.splice(0,1,"Pinapple")
// console.log(arr14);



// // Дан массив ["Apple", "Orange", "Pinapple", "Cherry"].
// // вырезать самый длинный элемент



// // Задание №6
// // const letters = ['a', 'b', 'c', 'd', 'e'];
// // Удалить 3 элемента, начиная с индекса 2, и сохранить их в переменной 'removed'

// const letters = ['a', 'b', 'c', 'd', 'e'];
// const removed = letters.splice(2,5)

// console.log(letters);
// console.log(removed);


// // Задание №7
// // const colors = ['red', 'green', 'blue'];
// // Вставить 'yellow' и 'purple' перед индексом 1

// const colors = ['red', 'green', 'blue'];
// colors.splice(1,0, 'yellow','purple')

// console.log(colors);

// // Задание №8
// // const fruits = ['apple', 'banana', 'orange'];
// // Заменить 1 элемент, начиная с индекса 1, на 'grape' и 'kiwi'

// const fruits = ['apple', 'banana', 'orange'];
// fruits.splice(1,1, 'grape', 'kiwi')

// console.log(fruits);

// // Задание №9
// // const numbers = [1, 2, 3, 4, 5];
// // Удалить 2 элемента, начиная с индекса 2

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(2,2)

// console.log(numbers);
// // let str = "dlroW olleH";
// // вывести Hello World

// let str = "dlroW olleH";
// const newe = str.split("").reverse().join("")

// console.log(newe);




////////////////////////////////////////////////// .indexOf()
////////////////////////////// .lastindexOf()
////////////////////////////////////////////////// .forEach()
////////////////////////////// .map()
////////////////////////////////////////////////// .filter()
////////////////////////////// .includes()
////////////////////////////////////////////////// .some() - проверяет элементы массива определенным заданном нам условием и выдает булевой тип 
////////////////////////////// .every()
////////////////////////////////////////////////// .find()
////////////////////////////// .reduce()
////////////////////////////////////////////////// .sort()


// const arr = [12,15,14,54,65,456,8754,223,5,4,789,55]
// const arr1 = ["Aza","Kana","aiba","samat"]
// console.log(arr.sort());
// console.log(arr1.sort());


// const numbers = [2,5,4,9,9,2,7,5,2,4,8,4]
// const res = numbers.sort((a, b) => {
//     return a - b;
// })
// console.log(res);

// const names = ["Argen","Freya","Bakyt","Masha","Samat","Luntik"]

// const result = names.sort((a, b) => {
//     return a.length - b.length;
// })
// console.log(result);

// console.log(names.sort());

// const result2 = names.sort((a, b) => {
//     return b > a ? "1" : "-1"
// })
// console.log(result2);



// 1. Сортировка по возрастанию: Создай массив чисел и отсортируй его по возрастанию с использованием метода .sort().

// const numbers = [2,5,4,9,9,2,7,5,2,4,8,4]
// const res = numbers.sort((a, b) => {
//     return a - b;
// })
// console.log(res);

// 2. Сортировка строк: Имея массив строк, отсортируй его в алфавитном порядке с использованием метода .sort().

// const colors = [ "Orange", "Pinapple","Apple", "Cherry"]
// const res1 = colors.sort((a, b) => {
//     return a > b ? "1" : "-1"
// })
// console.log(res1);

// 3. Обратная сортировка: Создай массив чисел и отсортируй его в обратном порядке, используя метод .sort() и передавая функцию сравнения.

// const numbers = [2,5,4,9,9,2,7,5,2,4,8,4]
// const res = numbers.sort((a, b) => {
//     return b - a;
// })
// console.log(res);

// 4. Смешанный массив: Создай массив, который включает в себя числа и строки, затем отсортируй его так, чтобы числа оказались в начале массива, используя метод .sort() и функцию сравнения.

//  const res2 = [20, 30, 10,"Aza","Eldiyar","Doni"]

//  if (typeof a === "number" && typeof b === "number"){
//     return a - b; 
//  }else if(typeof a === "number"){
//  return -1
//  }else if(typeof b === "number"){
//     return 1
// }else{
//     return a > b ? "1" : "-1"
// }
// console.log(res2);


// const numbers = [1,2,3,4,5]
// console.log(numbers);

// const res = numbers.reduce((acc, el, index, arr) => {
//  return acc * el; 
// })

// const onlyOddNumbers = numbers.reduce((acc, el ) => {
//     if(el % 2 === 0){
//         return[...acc, el]
//     }else{
//         return acc;
//     }
// }, [])
// console.log(onlyOddNumbers);

// const arr = ["Sadyr", "Japarov"]
// const arr1 = arr.reduce((acc, el) => {
//     return acc + el
// })
// console.log(arr1);

// // 1. Сумма чисел: Создай массив чисел и используй метод .reduce(), чтобы найти их сумму.

// const numbers = [1,2,3,4,5]
// const res = numbers.reduce((acc, el, index, arr) => {
//  return acc + el; 
// })
// console.log(res);
// 2. Объединение строк: Имея массив строк, используй .reduce(), чтобы объединить их в одну строку.

// const arr = ["Aibek", "Japarov"]
// const arr1 = arr.reduce((acc, el) => {
//     return acc + el
// })
// console.log(arr1);

// 3. Поиск максимального значения: Создай массив чисел и используй .reduce(), чтобы найти максимальное значение в массиве.

// const num = [1,2,5,8,8,9,6,89,5,25,5,888,5]
// const maxNum = num.reduce((acc, el) => {
//     return Math.max(acc,el)
// })
// console.log(maxNum);
// 4. Подсчет четных чисел: Создай массив чисел и используй .reduce(), чтобы подсчитать количество четных чисел.

// const arr2 

// 5. Поиск среднего значения: Создай массив чисел и используй .reduce(), чтобы найти среднее значение.

// const arr3 = [1,2,3,4,5,6,7,8,9]
// const newArr = arr3.reduce((a, b) => {
//     return a + b
// }) / arr3.length

// console.log(newArr);

// 6. Умножение элементов массива: Создай массив чисел и используй .reduce(), чтобы найти их произведение.

///////////////////////////////////////////////

//sort()
// 1.Отсортируйте массив чисел по возрастанию.

// const numbers = [10,9,8,7,6,5,4,3,2,1]
// const res = numbers.sort((a, b) => {
//     return a - b;
// })
// console.log(res);

// 2.Отсортируйте массив строк в алфавитном порядке.

// const names = ["Argen","Freya","Bakyt","Masha","Samat","Luntik"]
//  const result2 = names.sort((a, b) => {
//         return a > b ? "1" : "-1"
//     })
//     console.log(result2);
    


// // 3.Отсортируйте массив чисел по убыванию.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const res = numbers.sort((a, b) => {
//     return b - a;
// })
// console.log(res);


// 4.Отсортируйте массив строк в обратном алфавитном порядке.

// const names = ["Argen","Freya","Bakyt","Masha","Samat","Luntik"]
//  const result2 = names.sort((a, b) => {
//         return b > a ? "1" : "-1"
//     })
//     console.log(result2);

// 5.Отсортируйте массив объектов по значению определенного свойства в порядке возрастания.



// 6.Отсортируйте массив объектов по значению определенного свойства в порядке убывания.



// 7.Отсортируйте массив чисел сначала по четным, затем по нечетным значениям.

// const numbers = [1,2,3,4,5,6,7,8,9]

// const onlyOddNumbers = numbers.reduce((acc, el ) => {
//     if(el % 2 == 0 && el % 2 !== 0){
//         return[...acc, el]
//     }else{
//         return acc;
//     }
// }, [])
// console.log(onlyOddNumbers);

// 8.Отсортируйте массив строк по их длине от самых коротких к самым длинным.

// const names = ["Argenbaievich","Freya","Bakytbek","Masha","bek","aza"]

// const result = names.sort((a, b) => {
//     return a.length - b.length;
// })
// console.log(result);

// 9.Отсортируйте массив чисел так, чтобы сначала шли положительные значения, а затем отрицательные.



// 10.Отсортируйте массив строк так, чтобы строки с заглавными буквами шли после строк с маленькими буквами.

// const names = ["Argenbaievich","Freya","bakytbek","Masha","bek","aza"]

// const result = names.sort((a, b) => {
//     return a - b;
// })
// console.log(result);


//reduse()
// 1.Найти сумму элементов массива чисел.
// 2.Посчитать количество положительных элементов в массиве чисел.
// 3.Объединить все строки массива в одну строку.
// 4.Найти максимальное значение в массиве чисел.
// 5.Посчитать общее количество букв в массиве строк.
// 6.Создать объект, в котором ключами будут уникальные значения из массива, а значениями - их количество в массиве.
// 7.Сложить все четные элементы массива чисел.
// 8.Объединить массив массивов в один плоский массив.
// 9.Найти среднее значение массива чисел.
// 10.Создать объект, в котором ключами будут элементы массива, а значениями - сумма их индексов в массиве.

///////////////////////////////////////////////

// const arr = ["Samat","Aibek","Bekmat","Erbol"]

// console.log(arr.includes("Erlan"));


// const res = arr.some( el => {
//     return el === "Bekmat"
// })

// console.log(res);



// const arr = [
// "samat",
// "aibek",
// "nurislam",
// "Bekmat",
// "ERBOL"
// ]

// const dev = arr.find( el => { 
//     return el.length > 6 && el.length < 10 
// })


// console.log(dev);

// console.log( arr.find( el => {
//     return el [0] == el [0].toLocaleUpperCase()
// }));


// const res1 = arr.find( el => {
//    return el == el.toLocaleUpperCase()
// });
// console.log(res1);





// 1. Приветствие:
//     ◦ Напишите функцию greet, которая принимает имя в качестве аргумента и возвращает приветствие.

// function greet(main){
//     return "as salamu aleikum" + main
// }

// console.log(greet(" Bekmat"));

// 2. Сумма чисел:
//     ◦ Напишите функцию sumNumbers, которая принимает два числа и возвращает их сумму.

// function sumNumbers(num1, num2){
//     return num1+num2
// }

// console.log(sumNumbers(10, 20 ));

// 3. Объединение строк:
//     ◦ Напишите функцию concatStrings, которая принимает две строки и возвращает их объединение.
// 4. Площадь прямоугольника:
//     ◦ Напишите функцию calculateRectangleArea, которая принимает ширину и высоту прямоугольника и возвращает его площадь.

// function concatStrings(str1, str2){
//     return str1.concat(str2) 
// }

// console.log(concatStrings("10", " 20" ));

// 5. Проверка на четность:
//     ◦ Напишите функцию isEven, которая принимает число и возвращает true, если оно четное, и false, если нечетное.

// function isEven(number){
//     return number % 2 == 0
// }

// console.log(isEven(90));

// 6. Среднее значение массива:
//     ◦ Напишите функцию calculateAverage, которая принимает массив чисел и возвращает их среднее значение.

// function calculateAverage(arr) { 
//     let sum = 0; 
//     arr.forEach(el => {
//         sum+=el
//     });
//     return sum / arr.length; 
// }

// console.log(calculateAverage([1,2,3,4,5,6,7,8,9]));

// 7. Квадрат числа:
//     ◦ Напишите функцию squareNumber, которая принимает число и возвращает его квадрат.

// function squareNumber(number) {
//     return number * number
// }

// console.log(squareNumber(4));

// 8. Перевод строки в число:
//     ◦ Напишите функцию convertToNumber, которая принимает строку и возвращает соответствующее число (если возможно).

// function canvertTonumber(str4){ 
//     return +str4 
// } 
// console.log(canvertTonumber("89"));

// 9. Определение типа:
//     ◦ Напишите функцию getDataType, которая принимает аргумент и возвращает его тип данных.

// function getDataType(typeofe){ 
//     return typeof typeofe 
// } 
// console.log(getDataType(78));

// 10. Генерация случайного числа:
//     ◦ Напишите функцию generateRandomNumber, которая принимает диапазон и возвращает случайное число в этом диапазоне.
// function generateRandomNumber(ran){ 
//     return Math.floor(Math.random(10,100))
// } 
// console.log(generateRandomNumber());
// 11. Объединение массивов:
//     ◦ Напишите функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий элементы из обоих массивов.

// function mergeArrays(con) {
//     let arr1 = [1,2,3,4,5,6,7]
//     let arr2 = [1,2,3,8,6,5,4]
//     return arr1.concat(arr2)
// }
// console.log(mergeArrays());

// 12. Проверка на палиндром:
//     ◦ Напишите функцию isPalindrome, которая принимает строку и возвращает true, если она является палиндромом, и false в противном случае.
// 13. Удвоение элементов массива:
//     ◦ Напишите функцию doubleArray, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент умножен на 2.

// let arr = [2,4,6,8,10,12,14,16]
// function doubleArray(double) {
//     let newarr = arr.map(el => el * 2)
//     return newarr
// }
// console.log(doubleArray());
// 14. Преобразование к верхнему регистру:
//     ◦ Напишите функцию toUpperCase, которая принимает строку и возвращает ее в верхнем регистру.


// function toUppe(ver) {
//     const toUpper = ["as salamu aleikum"] 
//     return toUpper.toUpperCase()
// }
// console.log(toUppe(ver));

// 15. Определение наличия элемента в массиве:
//     ◦ Напишите функцию isArrayElementPresent, которая принимает массив и элемент, и возвращает true, если элемент присутствует в массиве, и false в противном случае.
// 16. Конкатенация массивов строк:
//     ◦ Напишите функцию concatenateStringArrays, которая принимает два массива строк и возвращает новый массив, содержащий элементы обоих массивов.
// 17. Определение четных чисел в массиве:
//     ◦ Напишите функцию getEvenNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
// 18. Сложение элементов массива:
//     ◦ Напишите функцию sumArray, которая принимает массив чисел и возвращает их сумму.
// 19. Проверка на пустоту:
//     ◦ Напишите функцию isEmpty, которая принимает массив или строку и возвращает true, если они пусты, и false в противном случае.
// 20. Определение наличия свойства в объекте:
//     ◦ Напишите функцию isObjectPropertyPresent, которая принимает объект и свойство, и возвращает true, если свойство присутствует в объекте, и false в противном случае.
// 21. Объединение объектов:
//     ◦ Напишите функцию mergeObjects, которая принимает два объекта и возвращает новый объект, содержащий свойства из обоих объектов.
// 22. Проверка числа на положительность:
//     ◦ Напишите функцию isPositiveNumber, которая принимает число и возвращает true, если оно положительное, и false в противном случае.
// 23. Получение последнего элемента массива:
//     ◦ Напишите функцию getLastElement, которая принимает массив и возвращает его последний элемент.
// 24. Сортировка массива:
//     ◦ Напишите функцию sortArray, которая принимает массив чисел и возвращает новый массив с отсортированными значениями.
// 25. Получение длины объекта:
//     ◦ Напишите функцию getObjectLength, которая принимает объект и возвращает количество его свойств.
// 26. Генерация уникального идентификатора:
//     ◦ Напишите функцию generateUniqueId, которая возвращает уникальный идентификатор (например, случайную строку).
// 27. Удаление дубликатов из массива:
//     ◦ Напишите функцию removeDuplicates, которая принимает массив и возвращает новый массив без повторяющихся элементов.
// 28. Сумма всех аргументов:


///////////////////////////////////////////////

// Преобразование данных
// // Создайте массив чисел и используйте метод map(), чтобы преобразовать числа в строковый формат с добавлением символа "$" в начале каждой строки.
// // 

// let prices = [10, 20, 30, 40, 50];
// let newArr = prices.map(el => el.replace("", "$"))
// console.log(newArr);

// Поиск элемента в массиве
// Создайте массив чисел и используйте метод find(), чтобы найти первый элемент, который больше  25 определенного порогового значения.
// let numbers = [10, 20, 30, 40, 50];

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.find(el => el > 25));

// Поиск элемента с использованием функции-коллбэка
// Создайте массив строк и используйте метод find(), чтобы найти первую строку, которая начинается с "b" определенной буквы.
// let words = ["apple", "banana", "cherry", "date"];

// let words = ["apple", "banana", "cherry", "date"];

// console.log(words.find(el => el.startsWith("b")));

// Поиск элемента по индексу
// Создайте массив чисел и используйте метод find() для нахождения элемента по его индексу 2
// let numbers = [10, 20, 30, 40, 50];

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.find((el, inx,) => inx == 2));

// Объединение пути к файлу
// Создайте массив строк, представляющих части пути к файлу, и используйте метод join() для объединения их в один путь.
// let pathParts = ["folder", "subfolder", "file.txt"];


// Преобразование чисел в строку
// Создайте массив чисел и используйте метод join() для преобразования их в строку, разделенную запятой.
// let numbers = [1, 2, 3, 4, 5];

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join(","));

// Проверка наличия элемента больше определенного порога
// Используйте метод some(), чтобы проверить, есть ли в массиве хотя бы один элемент больше 15
// let numbers = [10, 5, 8, 22, 3];


// let numbers = [10, 5, 8, 22, 3];
// console.log(numbers.some(el => el > 15));

// Проверка наличия строк, содержащих определенную букву
// Используйте метод some(), чтобы проверить, есть ли в массиве строк хотя бы одна строка, содержащая определенную букву “a”
// let words = ["apple", "banana", "cherry", "date"];

// let words = ["apple", "banana", "cherry", "date"];
// console.log(words.some(el => el.includes("a") ));

// Проверка наличия элементов, удовлетворяющих условию
// Используйте метод some(), чтобы проверить, есть ли в массиве хотя бы один элемент, удовлетворяющий определенному условию.
// let numbers = [10, 5, 8, 22, 3];

// let numbers = [10, 5, 8, 22, 3];
// console.log(numbers.some(el => el == 8));

// Дан массив let lengthName = [Patricia , William , Barbara , James , Chloe , Elizabeth ]; 
// Преобразуйте каждый элемент в его длину и выведите в console. Используйте метод map().

// let lengthName = ["Patricia" , "William" , "Barbara" , "James" , "Chloe" , "Elizabeth" ]; 
// console.log(lengthName.map(el => el.length));

// Напишите функцию для преобразования имени в инициалы. Аргумент в видес строки  строго состоит из двух слов с одним пробелом между ними. 
// На выходе должны быть две заглавные буквы с точкой, разделяющей их. Это должно выглядеть так: 
 // Sam Harris => S.H 
 // patrick feeney => P.F

// let names = ["Sam Harris","patrick feeney","Mannapov Aiba"]

// console.log(names);


// Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.


/////////////////////////////////////////// .indexOf()

// const cars = ["Toyota","Lexus","Audi","Subaru","Bmw","Toyota"]

// console.log(cars.indexOf("Toyota")); // 0
// console.log(cars.indexOf("Audi")); // 2
// console.log(cars.indexOf("Mers")); // -1

// .lastindexOf()

// console.log(cars.lastindexOf("Toyota")); // 5
// console.log(cars.lastindexOf("Kia")); //-1

//////////////////////////////////////////// .forEach()

// const students = [
//     "Seamat",
//     "Saemat",
//     "Sameat",
//     "Samaet",
//     "Samate",
//     "Saemat",
//     "Samfat",
//     "Samat",
//     "Samaft",
//     "Samatf"
// ]

// students.forEach((el, index, arr) => {
// console.log(el.toLocaleUpperCase());
// })

// const c = students.forEach((el) => {
// return el.toLocaleUpperCase()
// })

// console.log(result);



//////////////////////////// .map()

// const users = ["Jonn","Alex","Tonni","Tom"]

// const result = users.map((el, index, arr) => {
// return el.toLocaleUpperCase()
// })

// console.log(result);

// const result2 = users.map((user) => { 
// return user.length % 2
// })

// console.log(result2);

// const result3 = users.map((user) => { 
//     return user.slice(0,3)
//     })
    
//     console.log(result3);


///////////////// .filter()

// const numbers = [,885,5,-5,-5,-5,5,8,55,85,-55,-44,6,22,-22,-11,4,45,5,-0,1,5,6,3,0,-15,0,5]

// const evenNumbers = numbers.filter((number) => {
// return number % 2 == 0
// })

// console.log(evenNumbers);


// const num = numbers.filter((number) => {
//     return number < 0
//     })
    
//     console.log(num);

// 1) Удвоение элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент удвоен.
// let array = [1, 2, 3, 4, 5];
// function task(arr) {
//     let res = arr.map((el) =>  {
//       return el * 2;
//     });
//     return res;
//   }
  
//   let result = task(array);
  
//   console.log(result); 


// 2) Преобразование строк в верхний регистр
// Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка преобразована в верхний регистр.

// let array1 = ["asan","uson","erlan","erbol"];
// function task(arr1) {
//     let res1 = arr1.map(el => el.toLocaleUpperCase());
//     return res1;
//   }
  
//   let result1 = task(array1);
  
//   console.log(result1); 
// ///////////////////////////////////////////////
//   let str = "as salamu aleikum";
// const newe = str.split("").join("").toLocaleUpperCase()

// console.log(newe);

// 3)  Вычисление суммы элементов массива. Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

// let array = [1, 2, 3, 4, 5];
// function task(arr) {
//     let res = array.reduce((prev, item) => {
//         prev = prev + item;
//       return prev ;
//     });
//     return res;
//   }
  
//   let result = task(array);
  
//   console.log(result); 

// 4) Фильтрация элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function task(arr) {
//     let res = arr.filter((el) =>  {
//       return el % 2 === 0;
//     });
//     return res;
//   }
  
//   let result = task(array);
  
//   console.log(result); 

// 5) Преобразование строк в числа
// Напишите функцию, которая принимает массив строк, содержащих числа, и возвращает новый массив, в котором каждая строка преобразована в число.

// let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// function task(arr) {
//     let res = arr.map((el) =>  {
//       return +el;
//     });
//     return res;
//   }
  
//   let result = task(array);
  
//   console.log(result); 

// 6) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
// 7) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа. const numbers = [-2, -1, 0, 1, 2, 3, 4, 5];

// let array = [-2, -1, 0, 1, 2, 3, 4, 5];
// function task(arr) {
//     let res = arr.filter((el) =>  {
//       return el > 0;
//     });
//     return res;
//   }
  
//   let result = task(array);
  
//   console.log(result); 

// 8) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки определенной длины. const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];


// let ar=['spray', 'elite', 'exuberant', 'destruction', 'present'] 
// function task(wor){ 
//     const result = wor.filter((el) => el.length > 8); 
// return result 
// } 
// console.log(task(ar));

// 9) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные значения (без повторений).

// .

// 10) Фильтрация элементов, удовлетворяющих определенному условию
// Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только элементы, которые начинаются с определенной буквы. const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// .

// 11) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые больше определенного значения. const numbers = [10, 20, 30, 40, 50];



// 12) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки, состоящие только из заглавных букв. const words = ['APPLE', 'Banana', 'CHERRY', 'date', 'ELDERBERRY'];
// 13) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые являются четными и больше 5. const numbers = [2, 4, 6, 7, 8, 10, 11];
// 14) Напишите функцию, которая принимает массив значений различных типов данных и возвращает новый массив, содержащий только значения определенного типа. const values = [1, 'apple', true, null, 'banana', 5, false];
// 15) Напишите функцию, которая принимает массив чисел и возвращает максимальное число из них. const numbers = [10, 5, 8, 3, 9];
// 16) Напишите функцию, которая принимает массив строк и возвращает их объединение в одну строку. const words = ['Hello', ' ', 'world', '!'];
// 17) Напишите функцию, которая принимает массив чисел и возвращает среднее значение.  const numbers = [2, 4, 6, 8, 10];
// 18) Напишите функцию, которая принимает массив элементов и возвращает количество вхождений определенного элемента. const fruits = ['apple', 'banana', 'apple', 'cherry', 'apple']; 
// 19) Напишите функцию, которая принимает массивы и возвращает их конкатенацию в один массив. 
// 20) Напишите функцию, которая принимает массив чисел и возвращает первое четное число из массива. const numbers = [1, 3, 5, 2, 4, 6, 7];
// 21) Напишите функцию, которая принимает массив строк и возвращает первую строку определенной длины. const words = ['apple', 'banana', 'cherry', 'date'];
// 22) Напишите функцию, которая принимает массив чисел и возвращает первое положительное число из массива. const numbers = [-2, -1, 0, 3, 5, 7];
// 23) Напишите функцию, которая принимает массив строк и возвращает первый элемент, начинающийся с определенной буквы. const words = ['apple', 'banana', 'cherry', 'date'];





// 1. Найти первый элемент в массиве, который больше 10.

// let ar=[12,2,3,20,30,10,25,10,25,10] 
// function task(wor){ 
//     const result = wor.find((el, i, arr) => el >10); 
// return result 
// } 
// console.log(task(ar));

// 2. Проверить, все ли элементы массива являются положительными числами.

// let ar=[12,2,3,20,30,10,25,10,25,10] 
// function task(wor){ 
//     const result = wor.filter((el, i, arr) => el <0); 
//     if(result <0){
//         return false
//     }else{
//        return true
//     }
// return result 
// } 
// console.log(task(ar));

// 3. Проверить, есть ли в массиве хотя бы один элемент, равный 0.

// let ar=[12,2,3,20,30,10,25,1,,25,10] 
// function task(wor){ 
//     const result = wor.find((el, i, arr) => el == 0); 
//     if(result == 0){
//         return true
//     }else{
//        return false
//     }
// } 
// console.log(task(ar));

// 4. Найти первое четное число в массиве.
// let ar=[1,2,3,20,30,10,25,1,,25,10] 
//     const result = ar.find((el, i, arr) => el%2===0); 
// console.log(result)

// 5. Проверить, все ли строки в массиве содержат более 5 символов.



// // 6. Проверить, есть ли в массиве хотя бы одно отрицательное число.

// let ar=[12,2,3,20,30,-10,25,1,,25,10] 
// function task(wor){ 
//     const result = wor.find((el, i, arr) => el < 0); 
//     if(result < 0){
//         return true
//     }else{
//        return false
//     }
// } 
// console.log(task(ar));

// 7. Найти первую строку в массиве, которая начинается с буквы "A".

// let ar=['spray', 'elite', 'Axuberant', 'destruction', 'present']
// function task(wor){ 
//     const result = wor.find((el)=>el.startsWith("A")); 
// return result 
// } 
// console.log(task(ar));

// 8. Проверить, все ли элементы массива являются четными числами.
// 9. Проверить, есть ли в массиве хотя бы одна строка, содержащая только цифры.
// 10. Найти первый элемент массива, который делится на 3 без остатка.
// 11. Проверить, все ли элементы массива больше 0.
// 12. Проверить, есть ли в массиве хотя бы одна строка, начинающаяся с заглавной буквы.
// 13. Найти первый элемент массива, который меньше 5.
// 14. Проверить, все ли элементы массива являются строками.
// 15. Проверить, есть ли в массиве хотя бы один элемент, равный "apple".
// 16. Найти первый элемент массива, который содержит подстроку "JavaScript".
// 17. Проверить, все ли элементы массива положительны.
// 18. Проверить, есть ли в массиве хотя бы одна строка, длина которой больше 10 символов.
// 19. Найти первый элемент массива, который является нечетным числом.
// 20. Проверить, все ли элементы массива являются отрицательными числами.
// 21. Проверить, есть ли в массиве хотя бы один элемент, равный "banana".
// 22. Найти первую строку в массиве, которая содержит только гласные буквы.
// 23. Проверить, все ли элементы массива являются кратными 4 числами.
// 24. Проверить, есть ли в массиве хотя бы один элемент, являющийся палиндромом.
// 25. Найти первый элемент массива, который больше 100.
// 26. Проверить, все ли элементы массива являются целыми числами.
// 27. Проверить, есть ли в массиве хотя бы одна строка, заканчивающаяся на "tion".
// 28. Найти первый элемент массива, который содержит только цифры.
// 29. Проверить, все ли элементы массива являются простыми числами.
// 30. Проверить, есть ли в массиве хотя бы один элемент, являющийся числом Фибоначчи.
// */

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///   Object - ОбЪект

//Что такое объект 
//
// {}
// Свойства 
// key: value

// const arr = ["car","home","company"]
// const arr2 = ["car","home","company"]

// console.log(arr === arr2);

// const obj = {
//     color: "red"
// };

// const obj2 = {
//     color: "red",

//     getUsers: function() {},
// };

// console.log(obj === obj2);
// const getName = () => {}

// let getUsers = function () {}


// const company = {
//     name:"Gomus",
//     about:"Логистическая компания Gomus, Доставка и выкуп из США ",
//     price: "10$ за кг",
//     founders:["Aibek Mannapov", "Aidina Munduspaeva"],
//     contacts:{
//     phoneNumber:"+996999xxxxxx",
//     telegram:"@Gomus_usa",
//     instagram:"Gomus_usa",
//     email:"gomus.cargo.usa.com"
//     },

//     "join us":" Если хотите к нам то закрыты вакансии"
// }
// console.log(company.name);
// console.log(company.contacts.email);
// console.log(company.founders[0]);
// console.log(company["join us"]);


// company.name = "Cars from Bekmat";
// company.about="Логистическая компания 'Cars from Bekmat', Доставка и выкуп из США ";
// company.model = "Kia,hundai,Toyota";
// company.price= "from 10000$ to 70000$";
// company.founders=["Aibek Mannapov"];
// company.contacts= phoneNumber="+996999xxxxxx";
       
// company.contacts.telegram="@Cars_usa";
// company.contacts.instagram="Cars_usa";
// company.contacts.email="Cars.usa@Cars.com";
    

// company["join us"]=" Если хотите к нам то закрыты вакансии";
//     console.log(company);



//////////////////////////////////////////////////
// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// var obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj).length);
// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.
// const obj = { a: 1, b: 2, c: 3 };
// console.log(obj.c, [obj.c]);
// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// const obj = { Ширин: "1000", Айжан: "500", Атай: "200" };
// console.log(obj.Атай, obj.Ширин);
// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.
// obj = { Ширин: "1000", Айжан: "500", Атай: "200" };
// obj.Атай =  "500";
// console.log(obj);
// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.
// const obj = { Ширин: "1000", Айжан: "500", Атай: "200" };
// obj.Айбек = "1500";
// console.log(obj);
// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.
// const obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(obj.Атай);
// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.
// const obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.keys(obj));
// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.
// const obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.values(obj));
// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.
// const obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.entries(obj));
// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением
// const obj = { name: "Igor" };
// obj.age = "Aibek";
// console.log(obj);



//////
// Object.keys()
// Object.values()
// Object.entries()
// Object.freeze()





// Object.keys()




// Object.values()
// Object.entries()
// Object.freeze()

// const car = {
//     name : "mersedes-benz",
//     model : "G63",
//     color : "black",
// };
// console.log(car);

// //izmenenie

// car.name="BMW"
// car.model="X7"
// car.color="white"




// Создайте объект, представляющий стол (материал, цвет, количество ножек) и напишите функцию, 
// которая возвращает информацию о столе в виде строки.


// function getTable(){
//     return `Бул стол ${table.material} материалынан жасалып, өңү ${table.color} түстө жана ${table.numberOfLegs} буту бар`
// }
// const table = {
//    material:"Жыгач",
//    color:"Күрөң",
//    numberOfLegs: 6,
// }

// console.log(getTable(table));



// const cars = [
//     {
//       марка: 'Toyota',
//       модель: 'Camry',
//       год: 2022,
//       цвет: 'Серебристый',
//       двигатель: '2.5L 4-цилиндровый',
//       трансмиссия: 'Автоматическая',
//       особенности: ['Кожаные сиденья', 'Камера заднего вида', 'Двухзонный климат-контроль'],
//       цена:30000
//     },
//     {
//       марка: 'Honda',
//       модель: 'Civic',
//       год: 2023,
//       цвет: 'Синий',
//       двигатель: '1.8L 4-цилиндровый',
//       трансмиссия: 'Ручная',
//       особенности: ['Электростеклоподъемники', 'MP3-плеер', 'Круиз-контроль'],
//       цена:20000
//     },
//     {
//       марка: 'Ford',
//       модель: 'Mustang',
//       год: 2021,
//       цвет: 'Красный',
//       двигатель: '5.0L V8',
//       трансмиссия: 'Автоматическая',
//       особенности: ['Спортивные сиденья', 'Навигационная система', 'Запуск с кнопки'],
//       цена:45000
//     },
//     {
//       марка: 'Chevrolet',
//       модель: 'Malibu',
//       год: 2022,
//       цвет: 'Черный',
//       двигатель: '1.5L 4-цилиндровый',
//       трансмиссия: 'Автоматическая',
//       особенности: ['Датчики парковки', 'Система предупреждения столкновений', 'Электрорегулировка сидений'],
//       цена:25000
//     },
//     {
//       марка: 'Nissan',
//       модель: 'Altima',
//       год: 2023,
//       цвет: 'Серый',
//       двигатель: '2.0L 4-цилиндровый',
//       трансмиссия: 'CVT',
//       особенности: ['Подогрев сидений', 'Система доступа без ключа', 'Система слежения за полосой движения'],
//       цена:35000
//     },
//   ];




// Фильтрация массива объектов:
// Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только те объекты, у которых год выпуска выше определенного значения.

// function filterCarsByYear(cars){
//     return cars.filter(el => el.год > 2021)
// }
// console.log(filterCarsByYear(cars));
// Сортировка массива объектов:
// Отсортируйте массив объектов по их году выпуска (по возрастанию и убыванию).

// const carsSort = 

// Поиск объекта по свойству:
// Напишите функцию, которая принимает массив объектов и значение свойства (например, марка), и возвращает объект с этим значением свойства, если такой объект найден.

// Обновление свойства объекта:
// Напишите функцию, которая принимает массив объектов, уникальный идентификатор объекта и новое значение для свойства, и обновляет это свойство у соответствующего объекта.

// Вычисление среднего значения свойства:
// Напишите функцию, которая принимает массив объектов и свойство (например, цена), и возвращает среднее значение этого свойства для всех объектов в массиве.

// function priceCars(cars) {
//     return cars.reduce((acc, el) => acc + el.price, 0)
// }
// Группировка объектов по свойству:
// Создайте функцию, которая группирует объекты в массиве по значению определенного свойства. Например, группировка автомобилей по их марке.

// function groupCars(cars) {
//     const group = {};

//     cars.forEach(car => {
//        const keys = Object.keys(car) 

//        keys.forEach((key) => {
//         if(key in group) {
//             group[key] = [...group[key], car[key]]
//         }else{
//             group[key] = [car[key]]
//         }
//        })
//     });
//     return group
// }
// console.log(groupCars(cars));

// Удаление объекта из массива:
// Напишите функцию, которая принимает массив объектов и уникальный идентификатор объекта, и удаляет этот объект из массива.

// Создание нового объекта на основе существующих:
// Напишите функцию, которая принимает массив объектов и создает новый объект, содержащий свойства, являющиеся комбинацией свойств из всех объектов.

// Фильтрация объектов по нескольким свойствам:
// Напишите функцию, которая принимает массив объектов и объект-фильтр с определенными значениями свойств, и возвращает массив объектов, которые соответствуют заданным условиям.


///////////////////////////////////////////////////////


//this
//method

// const user = {
//     firstName:"Argen",
//     LastName:"Adilet uulu",
//     age:20,

//     sayHello: function() {
//         return `Здраствуйте меня зовут ${this.LastName} ${this.firstName}  Мне ${this.age} лет`
//     }
// }

// console.log(user.firstName);
// console.log(user.sayHello());


///.hasOwnProperty() - проверяет обьект по нашим свойствам









// function createPrivateVariable() {
//     let value = null;

//     return{
//         getValue:function(){
//             return value;
//         },

//         setValue:function(newValue){
//             value = newValue
//         },
//     };
// }

// const privateVariable =  createPrivateVariable();

// console.log(privateVariable.getValue());

// privateVariable.setValue("Samat");
// console.log(privateVariable.getValue());

// privateVariable.setValue(["Samat","Elmar"]);
// console.log(privateVariable.getValue());






// 1. Создайте объект person с полями name, age и gender, и установите для них значения.
// 2. Добавьте метод sayHello к объекту person, который выводит приветствие с именем человека.
// const person = {
//     name:"Aibek",
//     age:18,
//     gender:"man",
    
//     sayHello: function() {
//         return `Здраствуйте меня зовут  ${this.name}  Мне ${this.age} лет`
//     }
// }

// console.log(person);
// console.log(person.sayHello());
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);

// 3. Создайте объект car с полями make, model и year, и установите для них значения.
// 4. Добавьте метод startEngine к объекту car, который выводит сообщение о запуске двигателя.

// const car =  {

//     make:"Toyota",
//     model:"camry",
//     year:2023,

//     startEngine:function() {
//         return `Здраствуйте запускается двигатель  ${this.model} ,`
//     }
// }
// console.log(car);
// console.log(car.startEngine());



// 5. Создайте объект book с полями title, author и publishedYear, и установите для них значения.
// 6. Добавьте метод displayInfo к объекту book, который выводит информацию о книге.

// const book = {

//     title:"'Манас'",
//     author:"Сагымбай Орозбаков",
//     publishedYear:2017,

//     displayInfo:function() {
//         return `Бул китеп ${this.publishedYear}-жылы 150 жылдыгы кеңири белгиленип жаткан атактуу акын. ${this.author} версиясындагы ${this.title} эпосунун түрк тилине толугу менен. `
//     },

// }

// console.log(book);
// console.log(book.displayInfo());

// 7. Создайте объект calculator с методами add, subtract, multiply и divide для выполнения базовых математических операций.

// const calculator = {

//     first:5,
//     symbol:"+",
//     second:10,

//     calculato:function(){
//         if (this.symbol === "+"){
//     console.log(this.first + this.second);
// } else if (this.symbol === "-"){
//     console.log(this.first - this.second);
// } else if (this.symbol === "*"){
//     console.log(this.first * this.second);
// } else if (this.symbol === "/"){
//     console.log(this.first / this.second);
// } else {
//   console.log("error");
// }
//     }
// }

// console.log(calculator);
// console.log(calculator.calculato());

// 8. Создайте объект rectangle с полями width и height, и добавьте метод calculateArea для вычисления площади прямоугольника.

// const rectangle = {

//     width:25,
//     height:25,

//     calculateArea:function(){
//          return this.height * this.width
//     }

// }

// console.log(rectangle);
// console.log(rectangle.calculateArea());

// 9. Создайте объект dog с методами bark и fetch для имитации поведения собаки.

// const dog = {
//     bark:function(){
//         return "Гав Гав"
//     },
//     fetch:function(a){
//         return "Принеси мячик"
//     },
// }

// console.log(dog.fetch());'Принеси мячик'
// console.log(dog.bark()); 'Гав Гав'


// 10. Создайте объект student с полями name, grade и методом study, который выводит сообщение о занятиях студента.

// const student =  {

//     name:"Aibek",
//     grade:5,

//     study:function() {
//         return `${this.name} сабакты ${this.grade} ке окуйт`
//     }
// }
// console.log(student);
// console.log(student.study());

// 11. Создайте объект bankAccount с полями balance и методами deposit и withdraw для управления балансом.



// 12. Создайте объект movie с полями title, director и releaseYear, и методом play для воспроизведения фильма.
// 13. Создайте объект circle с полем radius и методом calculateCircumference для вычисления длины окружности.
// 14. Создайте объект computer с полями brand, processor и ram, и добавьте метод turnOn для включения компьютера.
// 15. Создайте объект restaurant с полями name, cuisine и методами open и close для управления рестораном.
// 16. Создайте объект song с полями title, artist и duration, и добавьте метод play для проигрывания песни.
// 17. Создайте объект weather с полями temperature, humidity и методом getForecast для получения прогноза погоды.
// 18. Создайте объект calendar с методами addEvent, removeEvent и viewEvents для управления событиями в календаре.
// 19. Создайте объект fruitBasket с полем fruits (массивом) и методами addFruit и removeFruit для управления содержимым корзины с фруктами.
// 20. Создайте объект game с полями title, genre и методом playGame для запуска игры.




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// Цикл //////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/// 1)

// for (let i = 0; i < 10; i++) {
// console.log(i);    
// }

// /// 2)

// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0){
//         console.log(i);
//     }
//     }

// /// 3)

// for (let i = 100; i  > 0; i--) {
//     console.log(i);    
    // }




// const arr = ["Maryam","Aidina","Nurislam","Nurs","Ilimbek"]
// let res = "Aibek";
// for (let i = 0; i < arr.length; i++) {
//     const el = arr [i];
//     res = res + el
// }
// console.log(res);




// 1. Вывести числа от 1 до 10.

// for (let i = 1; i < 11; i++) {
//     console.log(i);    
//     }

// 2. Вывести таблицу умножения на 5.

// for (let i = 0; i < 10; i++) {
//     console.log(i * 5);    
//     }

// 3. Посчитать сумму чисел от 1 до 100.
// let sum = 0
// for (let i = 0; i < 100; i++) {
//    sum += i
    
// }
// console.log(sum);

// 4. Вывести каждую вторую букву из слова "JavaScript".

// let arr = "JavaScript"
// let result = ""
// for (let i = 1; i < arr.length; i+=2) {

// result += arr[i]
   
//     }
//     console.log(result);

// 5. Вывести все ключи объекта.

// let obj = {name:"Toyota", model:"camry", year: 2023,}
// let keys=Object.keys(obj) 
// console.log(keys); 
// for (let i = 0; i < keys.length; i++) {
//     console.log(Object.keys(keys)); 
// }





// 6. Вывести все значения объекта.

// let obj1 = {name:"Toyota", model:"camry", year: 2023,}
// let keys1=Object.values(obj) 
// console.log(keys); 
// for (let i = 0; i < keys.length; i++) {
//     console.log(Object.values(keys)); 
// }

// 7. Посчитать количество элементов в массиве.

// let arr = [1,2,3,4,5]

// console.log(arr.length);

// 8. Вывести все числа массива в обратном порядке.
// 9. Вывести индексы элементов массива.
// 10. Проверить, есть ли в массиве число 10.

// const text = "Argentina manit negra"

// let reversedText = ""
// for (let i = text.length - 1; i >= 0; i--){
//     const letter = text[i]
//     reversedText=reversedText+letter
// }
// console.log(reversedText);

// 11. Вывести все символы строки в обратном порядке.

// const nums = [1, 3, 4, 7, 10, 3, 5, 8]

// let isFindEl = false;

// for (let i = 0; i < nums.length; i++){
//     const el = nums[i];

//     if (el === 10) {
//         isFindEl=true
//     }
// }
// console.log(isFindEl);

// 12. Вывести все четные числа от 1 до 20.

// for (let i = 0; i < 20; i++) {
// if(i % 2 == 0) {
//     console.log(i);
// }
// }

// 13. Вывести сумму всех элементов массива.



// 14. Вывести все элементы массива, кроме первого.

// const arr = [1,2,3,4,5,6,7,8,9]
// let sum = []
// for (let i = 0; i < arr.length; i++) {
//     if(sum === 1){
//         continue
//     }else{
//          sum.push(arr)
//     }
    
// }
// console.log(sum);
// 15. Посчитать количество гласных букв в слове.
// 16. Проверить, все ли элементы массива больше 0.
// 17. Посчитать сумму квадратов чисел от 1 до 10.
// 18. Вывести все кратные 3 числа от 1 до 30.
// 19. Вывести среднее арифметическое элементов массива.
// 20. Вывести последние 5 элементов массива.
// 21. Вывести все ключи объекта в верхнем регистре.
// 22. Проверить, все ли ключи объекта состоят только из букв.
// 23. Посчитать произведение всех элементов массива.
// 24. Вывести все нечетные числа от 1 до 50.
// 25. Вывести все значения объекта, длина которых больше 5 символов.
// 26. Проверить, все ли значения объекта являются числами.
// 27. Посчитать количество пробелов в строке.
// 28. Вывести каждый третий элемент массива.
// 29. Вывести все числа от 10 до 1 в обратном порядке.
// 30. Проверить, все ли значения массива являются строками.

// let res =  6 === 0 
// function howMuchILoveYou(nbPetals) {

//     if(nbPetals % 6 === 0 ){
// return "not at all"

// }else if (nbPetals % 6 === 1 ){
//     return "I love you"
    
//     }else if (nbPetals % 6 === 2 ){
//         return "a little"
        
//         }else if (nbPetals % 6 === 3 ){
//             return "a lot"
            
//             }else if (nbPetals % 6 === 4 ){
//                 return "passionately"
                
//                 }else if (nbPetals % 6 === 5 ){
//                     return "madly"
                    
//                     }

// }
// console.log(howMuchILoveYou(7));


//////////////////////////////////////////////////////////////////////////
//while | do while | for of | for in 

// 1- step | initial value | variable
// let i = 0;


// 2- step || if
// while (i<10) {
//     console.log(i);

//     // 2- step
//     i++
// }

// do while 
// let i = 0
//  do{
//     console.log(i);

//     // 2- step
//     i++
// }while (i>10)


// const names = ["frea","maryam","aibek","erbol"]

// for( const person of names){
//     console.log(person);
// }

// for( const index in names){
//     console.log(index);
// }


// const obj = {make:"Toyota",
//     model:"camry",
//     year:2023,
// }

// for( const ob in obj){
//     console.log(ob);
// }

// const str = "As salamy aleikum"

// for( const st of str){
//     console.log(st);
// }

// for( const tr in str){
//     console.log(tr);
// }

// 1. Выведите столбец чисел от 1 до 50.

// let i = 0;
//  do{
//     console.log(i);
//     i++
//  }while(i<50)

// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.
// const arr = []
// let i = 0

//  while(i < 10){
//     arr.push("X")
//     i++
// }
// console.log(arr);

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.

// const arr = [5, 3, 1, 2, 7]

// for( const st of arr){
//         console.log(st);
//     }
    

// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.



// let summ=1
// const arr=[5, 2, 1, 2]
// for (const sum of arr) {
//     summ=summ*sum
// }   
// console.log(summ);

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.

// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let sum2=1
// for (let i = 0; i < 100; i++) {
//  sum2=i+sum2  
// }
// console.log(sum2);

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// let summ=0
// const arr=[2, 4, 5, 6, 8]
// for (const sum of arr) {
//     summ=summ+sum
// }   
// console.log(summ);

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// const num = [3,7, 4, 6, 12,15, 3, 5]

// for (const sum of num) {
// if(sum > 3 && sum < 10) {
//     console.log(sum);
// }   
// }

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// const num = [-3,7, 4, -6, 12,-15, 3,3, -5]
// let numm = 0
// for (const sum of num) {
// if(sum > 0) {
//     numm=numm+sum 
// }   
// }
// console.log(numm);

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// const num = [3,7,4 , 6, 12,15, 3, 5]

// for (const sum of num) {
// if(sum == 4
//     ) {
//     console.log("Есть");
// }   
// }


// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let i = 0; i < arr.length; i++){
//     console.log(arr.join("-"));
// }


// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива.
// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].Создайте цикл, который выводит нечетные числа, которые больше 10.
// 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.


// Подсчет количества пробелов в строке: let str = "Это строка с пробелами";

// let str = "Это строка с пробелами"
// let count = ""
// for(let i = 0;i < str.length;i++){
//     if(str[i] == " "){
//       count++
//       console.log(i, count);
//     }

// }



// Дан массив с объектами: [
//     {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//     {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//     {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//     {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//     {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
    
//     ], задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')

    // const cars = [
    //     {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
    //     {mark: 'Audi', year: 1996, price: 2500, sale: 0},
    //     {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
    //     {mark: 'BMW', year: 2015, price: 18000, sale: 0},
    //     {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
        
    //     ]

    //     const get = cars.map((el) => {
    //         if(el.year < 2007){
    //             return el.sale = "20%"
    //         }
    //     })
    //     console.log(cars);



// Создайте функцию checkTask(arr), которая принимает в аргументы массив состоящий из строк и выводит в консоль новый массив состояший только из первых и последних букв каждой строки.
// Например, для массива:
// ['hi', 'goodbye', 'smile']
// Вывод будет:
// ['hi', 'ge', 'se']


// const str = ['hi', 'goodbye', 'smile']

// const res = str.map((user) => { 
//     return user[0] + user[user.length -1]
//     })
// console.log(res);




// Что, если нам нужно добавить длину слов, разделенных пробелом, в конце того же слова и вернуть ее в виде массива?```
// // "apple ban" --> ["apple 5", "ban 3"]


// let str = ["apple"]
// let count = []
// for(let i = 0;i < str.length;i++){
//     if(str[i] == ){
//       count++
//       console.log(i, count);
//     }

// }

// Вывод чисел в диапазоне от 1 до 100 с шагом 2;
// for (let i = 0; i < 100; i+=2) {
//         console.log(i);
//     }


// Вывод таблицы умножения для числа 5:




// let arr = ["hello", "hello", "hello"];

// const checkTask = function () {
//   let res = "";
//   for (let i of arr) {
//     for (let j in i) {
//       if (j % 2 == 0) {
//         res += i[j].toUpperCase();
//       } else {
//         res += i[j];
//       }
//     }
//   }
//   console.log(res);
// };
// checkTask(); 

// function checkTask(begin, end) {
//    for (let i = begin; i < end; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//    } 
// }
// checkTask(4, 8000);

// function checkTask(arr, deleteItems) {
// for(let i of arr){
//     if(i === deleteItems){
//         let delet = i
//         console.log(arr);
//     }
    
// }
// }
// console.log(checkTask(["good", "hello", 5], "good"));

// Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю.

// function rgb(){

// }
  
// Напишите функцию, где пользователь вводит любое целое положительное число. 
// А программа суммирует все числа от 1 до введенного пользователем числа.


// function checkTask(arr){
//     let sum = 1
// for (let i = 0; i < arr; i++) {
//    sum += i
// }
// return sum
// }
// console.log(checkTask(10));


// Задание №1
// Дан массив ["Sultan", "Azamat", "Eldar", "Islam", "Taalai"]. Выведите в консоль имена Azamat и Islam с помощью цикла while

// let arr = ["Sultan", "Azamat", "Eldar", "Islam", "Taalai"]


// let i = 0;

//  while(i < arr.length){
    
//     if (i % 2 !== 0) {

//         console.log(arr[i]); 
//     }
    
//     i++;
// }

// Задание №2
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла while

// let arr = []
// let i = 1
// while (i < 10) {
//     arr.push(i)
//     i++
    
// }
// console.log(arr);

// Задание №3
// Выведите в консоль все числа в промежутке с 50 до 99 включительно с помощью цикла.


// let i = 50
// while (i <= 99) {
//     console.log(i);
//     i++
    
// }

// Задание №4
// Выведите те же числа, но уже в обратном порядке, т.е. с 99 до 50.

// let i = 99
// while (i >= 50) {
//     console.log(i);
//     i--
    
// }

// Задание №5
// Найдите самый длинный элемент массива и вывкдите в консоль
// ["pen", "pineapple", "apple", "pen"]

// let arr = ["pen", "pineapple", "apple", "pen"]
// let i = 0;
// while (i < arr.length) {
//     console.log(Mm);
//     i++
// }


// Задание №6
// Так же найдите самый короткий элемент этого же массива

// Задание №7
// Выведите в консоль все элементы с четными индексами.
// [1,2,3,4,5,6,7,8,9]

// Задание №8
// Дан двумерный массив. Выведите в консоль все элементы.
// [[1,2], [3,4], [5,6]]




// Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор)

// Пример №1:
// Ввод: tenet
// Ответ: true

// Пример №2:
// Ввод: my gym
// Ответ: true

// Пример №3Ж
// Ввод: nolan
// Вывод: false

// function findPalindromItems(str) {
//   let two = str.split(" ").join("");
//   return (str = str.split("").reverse().join("").split(" ").join("") === two);
// }

// console.log(findPalindromItems("m   y     gy      m"));



// let obj = {
//   name: "John",
//   age: 22,
// };

// let str = "Bill";
// console.log(str);

// console.log(obj.age);

// let person = {
//     name: "John",
//     age: 10,
//     work: ["HTML", "CSS", "JS"],
//     car: {
//       bmw: "X5",
//       mers: "221",
//     },
//     price: true,
//   };
//   function checktask(arr) {
//     let res = [];
//     for (let i of arr) {
//       res.push((i += " is cool"));
//     }
//     return {
//       name: "John",
//       age: 10,
//       work: res,
//       car: {
//         bmw: "X5",
//         mers: "221",
//       },
//       price: true,
//     };
//   }
//   console.log(checktask(["HTML", "CSS", "JS"]));


// Задание №1
// С помощью цикла написать код который находит наибольший общий
// делитель у двух чисел.
// Пример: для чисел 54 и 24 наибольший общий делитель равен 6.

// Задание №2
// Используя цикл for вывести все четные числа от 1 до 100;

// Задание №3
// Подсчитайте сумму чисел в диапазоне от 1 до 20 с помощью цикла for, while и do...while.

// Задание №4
// Создайте массив из 20 случайных чисел в диапазоне от 1 до 100. Выведите в консоль
// все числа, которые делятся на 3
// все числа, которые делятся на 5
// все числа, которые делятся на 10

// Задание №5
// Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

// Задание №5
// Напишите функцию, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.

// Задание №6
// Найдите самое длинное слово в строке и выведите его в консоли
// const str = "I am a Megalodon, oceans feeling like a pond"

// Вам дана функция которая принимает строку в виде предложения. Необходимо заменить регистр каждого символа и вернуть строку.

// Пример: Дана строка 'The Quick Brown Fox'. Результатом должно быть: 'tHE qUICK bROWN fOX'

// let str = "The Quick Brown Fox";

// let arr = str.split("");

// arr = arr
//   .map((el) => {
//     if (el === el.toLowerCase()) {
//       return el.toUpperCase();
//     } else {
//       return el.toLowerCase();
//     }
//   })
//   .join("");

// console.log(arr);



// Напишите функцию checkTask(arr), принимающую в аргументы массив состоящий из других массивов.
// Используя метод reduce(), найдите сумму всех элементов.
// Результат выведите в консоль.
// Например, для массива:
// [1,2, [4,5,6], [7,8]]
// Вывод будет:
// 33

// Напишите функцию checkTask(arr), которая получает в качестве параметра массив.
// Функция должна перебрать все его элементы и вывести сам элемент, а также тип данных элемента - числовой, либо не числовой.
// К примеру, для массива:
// ['Молоко', -77, 11, 'Мед', -88]
// Вывод будет следующим:
// Молоко - не число
// -77 - число
// 11 - число
// Мед - не число
// -88 - число

// Напишите функцию checkTask(arr), которая будет принимать массив из чисел.
// Ваша функция должна находить сумму чисел методом forEach(), методом reduce() и map().
// Для массива [5, 6, 7, 8, 9] вывод будет:
// forEach: 35
// reduce: 35
// map: 35


// Создайте функцию checkTask(arr), принимающую массив и элемент массива, и удаляет переданный элемент из массива.
// Например для аргументов [2, 5, 9, 6] и 5, вывод будет:


// Дан массив с объектами: [
//     {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//     {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//     {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//     {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//     {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
// ], задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')

// const cars = [
//         {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//         {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//         {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//         {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//         {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
        
//         ]

//         const get = cars.map((el) => {
//             if(el.year < 2007){
//                 return el.sale = "20%"
//             }
//         })
//         console.log(cars);

// Дан массив с объектами:
// [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}
// ], задача: реализовать рассылку сообщений типа: 'Hello, [Здесь должно быть имя клиента], 
// the grand sale has begun, prices are reduced by 20%!', игнорировать клиентов, которым нет 18-ти лет



// let person = [
//   {
//     name: "John",
//     price: 2000,
//     work: "IT-BACKEND",
//     salary: 20000,
//   },
//   {
//     name: "John",
//     price: 2000,
//     work: "BANK",
//     salary: 9000,
//   },
//   {
//     name: "John",
//     price: 2000,
//     work: "IT-FRONTEND",
//     salary: 15000,
//   },
//   {
//     name: "John",
//     price: 2000,
//     work: "JOURNALIST",
//     salary: 10000,
//   },
// ];

// let res = person.filter((el) => el.work.includes("IT") )

// console.log(res);



// //? Информация о студентах
// let students_info = [
//     { name: "Askat", city: "London", street: "texas", house: "1" },
//     { name: "Mirdin", city: "Rim", street: "Manas", house: "22" },
//     { name: "Begimay", city: "Bishkek", street: "kurenkeeva", house: "2" },
//     { name: "Mikhail", city: "Tokio", street: "chuy", house: "24" },
//     { name: "Almas", city: "Berlin", street: "kurenkeeva", house: "12" },
//     { name: "Aitbay", city: "Bishkek", street: "Manas", house: "22" },
//   ];
  
//   //? Создаем объект, где ключи - это улицы, а значения - это списки студентов
//   let students_by_street = {};
//   for (let student of students_info) {
//     let street = student["street"];
//     if (!(street in students_by_street)) {
//       students_by_street[street] = [];
//     }
//     students_by_street[street].push(student);
//   }
  
//   //? Ищем студентов, проживающих на одноименных улицах в разных городах, но в одном доме
//   for (let street in students_by_street) {
//     let students = students_by_street[street];
//     let cities = new Set(students.map((student) => student["city"]));
//     let houses = new Set(students.map((student) => student["house"]));
//     if (cities.size > 1 && houses.size === 1) {
//       console.log(
//         `Студенты, проживающие на улице ${street} в разных городах, но в одном доме:`
//       );
//       for (let student of students) {
//         console.log(student["name"]);
//       }
//     }
//   }

// let arr = [12, 12, 4, 7, 3, 8, 9, 8, 4];

// delete Dublicate items


// const arr = [12, 12, 4, 7, 3, 8, 9, 8, 4];
// const newArr = arr.reduce((acc, el) => {
//     if (!acc.includes(el)) {
//         acc.push(el);
//     }
//     return acc;
// }, []);
// console.log(newArr); 

// [1, 4, 2, 5, 8, 3, 6, 7, 8]

// сорт 1 - 8 не использовать sort()

// Напишите функцию checkTask(arr), принимающую в
// аргументы массив с числами.

// Используя метод reduce(), найдите сумму всех
// элементов до первого нуля.

// Результат выведите в консоль.

// Например, для массива:

// [1, 2, 3, 0, 4, 5, 6]
// суммируем первые 3 элемента, так как дальше
// стоит элемент с числом 0.

// Вывод будет:

// 6

// function fun6(arr){
//     const red = arr.reduce((acc, el)=>{
//     if(el === 0){
//      return acc + el
//     }
//       return el
//     }, 0)
//     console.log(red);
//   }
//   console.log(fun6([1, 2, 3, 0, 4, 5, 6]));

// function checkTask(arr) {
    
// }
// console.log(checkTask([1, 2, 3, 0, 4, 5, 6]));

//? Задание 12
// Напишите функцию checkTask(arr), принимающую в
// аргументы массив состоящий из других массивов.

// Используя метод reduce(), найдите сумму всех элементов.

// Результат выведите в консоль.

// Например, для массива:

// [1,2, [4,5,6], [7,8]]
// Вывод будет:

// 33



// Напишите функцию checkTask(arr), которая принимает в аргументы
// массив и возвращает элемент массива с максимальным значением.

// К примеру, для массива:

// [4, 15, -4, 27, 12, 8];
// Возвращенным значением будет:

// 27
// Нельзя использовать sort()!

// function checkTask(arr) {
//     return Math.max(arr)
// }
// console.log(checkTask([4, 15, -4, 27, 12, 8]));

// 1. Найти первый элемент в массиве, который больше 10.
// let arr = [1, 2, 5, 3, 6, 8, 40, 9, 70];
// output: 40

// function checkTask(arr) {
//     return arr.find(el => el >10)
// }
// console.log(checkTask([1, 2, 5, 3, 6, 8, 40, 9, 70]));

// 2. Проверить, все ли элементы массива являются положительными числами.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// output: false

// function checkTask(arr) {
//     return arr.every(el => el > 0)
// }
// console.log(checkTask([1, 2, 4, 11, 6, 23, -0, 88, 67, 3]));

// 3. Проверить, есть ли в массиве хотя бы один элемент, равный 0.
// let arr = [5, 6, 3, 2, 7, 4, 0, 23, 16, 73, 28];
// output: true

// function checkTask(arr) {
//     return arr.some(el => el === 0)
// }
// console.log(checkTask([5, 6, 3, 2, 7, 4, 0, 23, 16, 73, 28]));

// 4. Найти первое четное число в массиве.
// let arr = [3, 5, 7, 1, 33, 77, 44];
// output: 44

// function checkTask(arr) {
//     return arr.find(el => el % 2 === 0)
// }
// console.log(checkTask([3, 5, 7, 1, 33, 77, 44]));

// 5. Проверить, все ли строки в массиве содержат более 5 символов.
// let person = ["Yntymak", "Malika", "Azima", "Abdylaziz", "Aitunuk","Aidana", "Elvira"];
// output: false

// function checkTask(arr) {
//     return arr.every(el => el.length > 5)
// }
// console.log(checkTask(["Yntymak", "Malika", "Azima", "Abdylaziz", "Aitunuk","Aidana", "Elvira"]));

// 6. Проверить, есть ли в массиве хотя бы одно отрицательное число.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// output: true

// function checkTask(arr) {
//     return arr.some(el => 1 > el)
// }

// console.log(checkTask([1, 2, 4, 11, 6, 23, -0, 88, 67, 3]));

// 7. Найти первую строку в массиве, которая начинается с буквы "M".
// let person = ["Yntymak", "Malika", "Azima", "Abdylaziz", "Aitunuk","Aidana", "Elvira"];
// output: Malika

// function checkTask(arr) {
//     return arr.filter(el => el[0] == "M")
// }

// console.log(checkTask(["Yntymak", "Malika", "Azima", "Abdylaziz", "Aitunuk","Aidana", "Elvira"]));

// 8. Проверить, все ли элементы массива являются четными числами.
// let arr = [3, 5, 7, 1, 33, 77, 44];
// output: false

// let arr = [3, 5, 7, 1, 33, 77, 44];

// let num = arr.every(el => el % 2 === 0)

// console.log(num);

// 9. Проверить, есть ли в массиве хотя бы одна строка, содержащая только цифры.
// let person = ["Yntymak", "Malika", "Azima", "Abdy1aziz", "Aitunuk","Aidana", "Elvira"];
// output: false

// let person = ["Yntymak", "Malika", "Azima", "Abdy1aziz", "Aitunuk","Aidana", "Elvira"];

// let arr = person.some(el => typeof el === "number" )

// console.log(arr);

// 10. Найти первый элемент массива, который делится на 3 без остатка.
// let arr = [5, 7, 1, 8, 9, 77, 44];
// output: 9

// let arr = [5, 7, 1, 8, 9, 77, 44];
// let num = arr.find(el => el % 3 === 0)
// console.log(num);

// 11. Проверить, все ли элементы массива больше 0.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// // output: true

// let num = arr.every(el => el >= 0)
// console.log(num);

// 12. Проверить, есть ли в массиве хотя бы одна строка, начинающаяся с заглавной буквы.
// let person = ["yntymak", "malika", "Azima", "abdy1aziz", "aitunuk","Aidana", "Elvira"];
// // output: true

// let arr = person.some(el => el[0] === el[0].toUpperCase())

// console.log(arr);

// 4, 5, 6

// let arr = [3, 2, 1, 7];


// Дан массив с объектами: [
//     {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//     {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//     {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//     {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//     {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
// ]
// задача: на все автомобили, которые старше 2007 года, поставить
// скидку 20%(для скидки использовать свойство 'sale')

// let arr = [
//         {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//         {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//         {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//         {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//         {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
//     ]

//     function checkTask(arr) {

//      let arr1 =  arr.map((el, index) => {
//          return { 
//             sale: year < 2007 ? price * 20 / 100 : 20 
//         }
//      })

       
//     }

// console.log(checkTask(arr));



// Дан массив с объектами:
// [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}
// ]
// задача: реализовать рассылку сообщений типа: 'Hello, [Здесь должно быть имя клиента],
// the grand sale has begun, prices are reduced by 20%!',
// игнорировать клиентов, которым нет 18-ти лет