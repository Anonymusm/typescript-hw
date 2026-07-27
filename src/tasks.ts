// FIRST

const age: number = 50;
const name: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
const notInitialize: undefined = undefined;
const callback = (a: number): number => { return 100 + a };

// 2 SECOND

let anything: any = -20;
anything = 'Text';
anything = {};

// 3 THIRD

let some: unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
    str = some;
}

// CHOTYRY 4

type PersonalData = [string, number];

const person: PersonalData = ['Max', 21];

// FIFTH 5

enum LoadingStatus {
  LOADING = 'LOADING',
  READY = 'READY'
}

const currentStatus: LoadingStatus = LoadingStatus.LOADING;

// SIXTH 6

type availableType = string | number;

const data: availableType = 500

// SEVENTH 7

type availableString = 'enable' | 'disable';

const string: availableString = "disable"

// EIGHTH 8

function showMessage(message: string) {
 console.log(message);
}

function calc(num1: number, num2: number) {
 return num1 + num2;
}

function customError() {
 throw new Error('Error');
}

// NINTH 9

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
