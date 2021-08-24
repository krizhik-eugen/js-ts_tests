// bubble sort
// сортировка по возрастанию

const arr = [12, 34, 777, 0, 42, 56, 10] //=>arr = [12, 34, 0, 42, 56, 10, 777]

for (let j = 0; j <= arr.length - 1; j++) {
    for (let i = 0; i <= arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
            /*const temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;*/
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]] //переприсваивание деструктризацией, современный способ перестановки переменных
        }
    }
}

console.log(arr)

//sort

const names = ['Camilla', 'Bob', 'Donald', 'Alex', 'alex']

names.sort()
console.log(names)

const numbers = [1, 1000, 9, 30]
const compareFn = (a, b) => {
    if (a > b) {
        return 1 //любое положительное число, тогда
    } else return -1
}
const compareFnNum = (a, b) => a - b //тоже самое, возврат положительного числа, тогда a и b поменяет местами

console.log(numbers.sort(compareFn))

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
console.log(students.sort((a,b) => a.name.toUpperCase() <= b.name.toUpperCase() ? -1 : 1))

console.log(students.sort((a,b) => a.age - b.age)) //если вернеться отрицательное, значит а меньше б и переставлять не нужно
