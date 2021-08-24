const todoList_ID1 = '13kd-98kd'
const todoList_ID2 = '15kd-74kd'
const todoList_ID3 = '23d-82kd'

const todoLists = [
    {
        id: todoList_ID1,
        title: "What to learn",
        filter: "all"
    },
    {
        id: todoList_ID2,
        title: "What to buy",
        filter: "completed"
    },
    {
        id: todoList_ID3,
        title: "What to drink",
        filter: "active"
    },
]

const tasks = {
    [todoList_ID1]: [
        {id: "99ut-06kf", title: "React", isDone: false},
        {id: "99ut-06kd", title: "Redux", isDone: false},
        {id: "99ut-06kr", title: "HTML", isDone: false},
        {id: "99ut-06kz", title: "CSS", isDone: false},
    ],
    [todoList_ID2]: [
        {id: "99ut-06kf", title: "React", isDone: false},
        {id: "99ut-06kf", title: "React", isDone: false},
        {id: "99ut-06kf", title: "React", isDone: false},
        {id: "99ut-06kf", title: "React", isDone: false},
    ],
    [todoList_ID3]: [
        {id: "99ut-06kf", title: "React", isDone: false},
        {id: "99ut-06kf", title: "React", isDone: false},
        {id: "99ut-06kf", title: "React", isDone: false},
    ]
}

console.log(tasks[todoList_ID1].find(t => t.id === "99ut-06kf").title)


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

const numbers = [1,2,3,4,5,6]

// например, подсчитаем сумарный балл студентов

console.log(students.reduce((acc, el) => acc + el.scores, 0))

// найти студентов с баллами больше 100

console.log(students.reduce((acc, el)=>{
    if (el.scores >= 100) {
        acc.push(el)
    }
    return acc
}, []))

