// CRUD create reed update delete
// Обновление интерфейса при изменинии state => ?  передача модифицированной копии state

// Примитивы

// Объекты
// 1. Сложная структура
// 2. Наличие методов и свойств
// 3. Ссылочный тип данных

const studentFirst = {
    name: 'Bob',
    age: 23,
    friends: ['Alex', 'Donald']
}  // #789

const studentSecond = {}  // #123

console.log(studentFirst === studentSecond) //false -> #789 ??? #123

const copyStudent = {
    ...studentFirst
    /*name: studentFirst.name,
    age: studentFirst.age,
    friends: studentFirst.friends*/
}

const trueCopyStudent = {
    ...studentFirst,
    friends: [...studentFirst.friends],
    name: 'John'
}

function func(num) {
    const fn = () => console.log(`Число ${num}`)
    return [num, fn]
}

/*const toolKit = func(100);

toolKit[1]()  // - используем элементы возвращенного массива, так неудобно использовать

const getHundred = toolKit[1]; // делаем ссылку на эту функцию и запускаем

const hundred = toolKit[0]

getHundred()*/

const [hundred, getHundred] = func(100)  //деструктурирующее присваивание. func возвращает массив и элементы присваиются


const students = [{
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 120
},
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }]

