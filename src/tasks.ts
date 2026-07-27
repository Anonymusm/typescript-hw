// FIRST

const age: number = 50;
const name: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
const notInitialize: undefined = undefined;
const callback = (a: number): number => { return 100 + a };

console.log(age, name, toggle, empty, notInitialize, callback(10));


// SECOND

let anything: any = -20;
anything = 'Text';
anything = {};

console.log(anything);


// THIRD

let some: unknown;
some = 'Text';
let str: string | undefined;

if (typeof some === 'string') {
    str = some;
}

console.log(some, str);


// FOURTH

type PersonalData = [string, number];

const person: PersonalData = ['Max', 21];

console.log(person);


// FIFTH

enum LoadingStatus {
  LOADING = 'LOADING',
  READY = 'READY'
}

const currentStatus: LoadingStatus = LoadingStatus.LOADING;

console.log(currentStatus);


// SIXTH

type availableType = string | number;

const data: availableType = 500;

console.log(data);


// SEVENTH

type availableString = 'enable' | 'disable';

const string: availableString = "disable";

console.log(string);


// EIGHTH

function showMessage(message: string) {
 console.log(message);
}

function calc(num1: number, num2: number) {
 return num1 + num2;
}

function customError() {
 throw new Error('Error');
}

showMessage('Hello');
console.log(calc(5, 10));

try {
  customError();
} catch (error) {
  console.log(error);
}


// NINTH

type Post = {
    title: string,
    likes: number,
    accounts: string[],
    status: "open" | "close",
    details?: {
        createAt: Date,
        updateAt: Date,
    }
}

const page1: Post = {
 title: 'The awesome page',
 likes: 100,
 accounts: ['Max', 'Anton', 'Nikita'],
 status: 'open',
 details: {
   createAt: new Date('2021-01-01'),
   updateAt: new Date('2021-05-01'),
 }
}

const page2: Post = {
 title: 'Python or Js',
 likes: 5,
 accounts: ['Alex'],
 status: 'close',
}

console.log(page1, page2);