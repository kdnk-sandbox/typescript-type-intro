interface MyObj101 {
  [foo: string]: string;
}

interface MyObj102 {
  [foo: number]: string;
}

type MyObjKey = keyof MyObj101;
type MyObjKey2 = keyof MyObj102;

// ----------------------

interface MyObj103 {
  foo: string;
  bar: number;
}

const str: MyObj103['foo'] = '123';

function pick<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type Obj104 = { [P in 'foo' | 'bar']: number };

interface Obj105 {
  foo: number;
  bar: number;
}

const obj105: Obj104 = { foo: 3, bar: 5 };
const obj106: Obj105 = obj105;
const obj107: Obj104 = obj106;


type PropNullable<T> = { [P in keyof T]: T[P] | null };
type Required3<T> = { [P in keyof T]-?: T[P] };


function propStringify<T>(obj: T): {[P in keyof T]: string} {
  const result = {} as {[P in keyof T]: string}
  for (const key in obj) {
    result[key] = String(obj[key]);
  }
  return result;
}

// T = { foo: number; baz: string; baz: never; }
function pickFirst<T>(obj: { [P in keyof T]: Array<T[P]> }): { [P in keyof T]: T[P] | undefined } {
  const result: any = {};
  for (const key in obj) {
    result[key] = obj[key][0];
  }
  return result;
}

// const obj = {
//   foo: [0, 1, 2],
//   bar: ['foo', 'bar'],
//   baz: [],
// };


// const picked = pickFirst(obj);
