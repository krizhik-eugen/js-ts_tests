import {ActionType, calculator, sum} from "./tasks1";
import {mult} from "./tasks1";
import {div} from "./tasks1";
import {sub} from "./tasks1";

/*
test('sum of number', () => {

    //1. тестовые данные
    const a: number = 3;
    const b: number = 7;

    //2. выполнение тестируемого кода
    const result = sum(a,b)

    //3. проверка результата
    expect(result).toBe(10)

})*/

test('sum of numbers', () => {
    expect(sum(4, 8)).toBe(12);
    expect(sum(-4, 8)).toBe(4);
    expect(sum(-4, -8)).toBe(-12);
    expect(sum(0, 0)).toBe(0);
})

test('multiplication of numbers', () => {
    expect(mult(4, 8)).toBe(32);
    expect(mult(-4, 8)).toBe(-32);
    expect(mult(0, 8)).toBe(0);
    expect(mult(-4, -8)).toBe(32);
})

test('division of numbers', () => {
    expect(div(4, 8)).toBe(0.5);
    expect(div(4, -8)).toBe(-0.5);
    expect(div(-4, -8)).toBe(0.5);
    expect(div(0, 8)).toBe(0);
    expect(div(4, 0)).toBe(Infinity)
})

test('subtracting of number', () => {
    expect(sub(4,8)).toBe(-4);
    expect(sub(4,-8)).toBe(12);
    expect(sub(-4,8)).toBe(-12);
    expect(sub(-4,-8)).toBe(4);
})

test('calculator', ()=>{
    const sumAction: ActionType = {type: 'sum', number: 8}
    expect(calculator(4,sumAction)).toBe(12)
    const multAction: ActionType = {type: 'mult', number: 8}
    expect(calculator(4,multAction)).toBe(32)
    expect(calculator(4, {type: 'div', number: 8})).toBe(0.5)
    expect(calculator(4, {type: 'sub', number: 8})).toBe(-4)
})