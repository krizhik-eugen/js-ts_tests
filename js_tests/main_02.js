/*

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
    }, {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];


const getName = (student) => student.name

console.log(students.map(getName))
console.log(itMap(getName, students))

function itMap(callback, array) {
    const newArray = []
    /!*for (let i = 0; i < array.length; i++) {
        const itemOfNewArray = callback(array[i]);
        newArray[i] = itemOfNewArray
        // newArray.push(itemOfNewArray) - то же самое
    }*!/

    array.forEach(st => {
        /!*const itemOfNewArray = callback(st);
        newArray.push(itemOfNewArray)*!/

        newArray.push(callback(st))
    })
    return newArray
}

function itFilter(callback, array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            newArray.push(array[i])
        }
    }
    return newArray
}

const getMarried = st => st.isMarried

console.log(students.filter(getMarried))
console.log(itFilter(getMarried, students))


function itFind(callback, array) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            return array[i]
        }
    }
}

const getJohn = st => st.name === 'John'

console.log(students.find(getJohn))
console.log(itFind(getJohn, students))*/

