// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export const sum = (...nums: Array<any>): number => nums.reduce((acc, el) => acc + el, 0)


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "10"
        } else if (a === b || a === c || b === c) {
            return "01"
        } else
            return "11"
    }
    return "00"
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

/*export const getSum = (number: number): number => number
    .toString()
    .split("")
    .reduce((acc, el) => acc + Number(el), 0)*/

export const getSum = (number: number): number => {
    let sum = 0;
    let rest = number
    while (rest >= 1) {
        sum += rest % 10;
        rest = Math.floor(rest / 10)
    }
    return sum
}


// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenSum = 0;
    let oddSum = 0;
    /*for (let i = 0; i < arr.length; i += 2) {
        evenSum += arr[i];
    }
    for (let i = 1; i < arr.length; i += 2) {
        oddSum += arr[i];
    }*/

    arr.forEach((el, index) => {
        (index % 2 === 0) ? (evenSum += el) : (oddSum += el)
    })

    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return evenSum > oddSum
}


// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export const isSquareGreater = (areaCr: number, areaSq: number): boolean => Math.sqrt(areaCr / Math.PI) * 2 <= Math.sqrt(areaSq)


// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

// Д.З.:
export function getBanknoteList(amountOfMoney: number): Array<number> {
    let resArr = [];
    let restAmountOfMoney = amountOfMoney
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    for (let i = 0; i < banknotes.length; i++) {
        while (restAmountOfMoney - banknotes[i] >= 0) {
            resArr.push(banknotes[i]);
            restAmountOfMoney = restAmountOfMoney - banknotes[i];
        }
    }
    return resArr
}

//...здесь пишем код.
// В return стоит "заглушка", чтоб typescript не ругался
