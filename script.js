"use strict";

console.log("JavaScript успішно підключено!");

console.log("--- Завдання 2 ---");

const studentName = "Микола";
let age = 17;
const averageGrade = 10.5;
const isStudent = true;
let notAssigned;
const emptyValue = null;
const bigNumber = 123456789012345678901234567890n;
const uniqueId = Symbol("studentId");

console.log("Ім'я:", studentName, "| Тип:", typeof studentName);
console.log("Вік:", age, "| Тип:", typeof age);
console.log("Середній бал:", averageGrade, "| Тип:", typeof averageGrade);
console.log("Студент:", isStudent, "| Тип:", typeof isStudent);
console.log("Без значення:", notAssigned, "| Тип:", typeof notAssigned);
console.log("Null:", emptyValue, "| Тип:", typeof emptyValue);
console.log("Велике число:", bigNumber, "| Тип:", typeof bigNumber);
console.log("Унікальний ID:", uniqueId, "| Тип:", typeof uniqueId);


console.log("--- Завдання 3 ---");

const value1 = "125";
const result1 = Number(value1);
console.log("До:", value1, typeof value1, "| Після:", result1, typeof result1);

const value2 = "15.75";
const result2 = Number(value2);
console.log("До:", value2, typeof value2, "| Після:", result2, typeof result2);

const value3 = 250;
const result3 = String(value3);
console.log("До:", value3, typeof value3, "| Після:", result3, typeof result3);

const value4 = true;
const result4 = String(value4);
console.log("До:", value4, typeof value4, "| Після:", result4, typeof result4);

const value5 = "false";
const result5 = Boolean(value5);
console.log("До:", value5, typeof value5, "| Після:", result5, typeof result5);

const value6 = 0;
const result6 = Boolean(value6);
console.log("До:", value6, typeof value6, "| Після:", result6, typeof result6);

const value7 = 1;
const result7 = Boolean(value7);
console.log("До:", value7, typeof value7, "| Після:", result7, typeof result7);

const value8 = null;
const result8 = Number(value8);
console.log("До:", value8, typeof value8, "| Після:", result8, typeof result8);

const value9 = "45px";
const result9 = Number(value9);
console.log("До:", value9, typeof value9, "| Після:", result9, typeof result9);

const value10 = "12.5kg";
const result10 = Number(value10);
console.log("До:", value10, typeof value10, "| Після:", result10, typeof result10);


console.log("--- Завдання 4 ---");

const firstString = "25";
const secondString = "5";
const firstNumber = Number(firstString);
const secondNumber = Number(secondString);

console.log("Сума:", firstNumber + secondNumber);
console.log("Різниця:", firstNumber - secondNumber);
console.log("Добуток:", firstNumber * secondNumber);
console.log("Без перетворення:", firstString + secondString);

console.log("--- Завдання 5 ---");


console.log('Number("hello"):', Number("hello"));

console.log('Number(""):', Number(""));

console.log('Boolean("0"):', Boolean("0"));

console.log('Boolean(""):', Boolean(""));

console.log("String(null):", String(null));

console.log('"10" + 5:', "10" + 5);

console.log('"10" - 5:', "10" - 5);

console.log("typeof null:", typeof null);
