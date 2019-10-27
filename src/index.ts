interface MyObj {
  foo: string;
  bar: number;
}

interface MyObj2 {
  foo: string;
}

const a: MyObj = { foo: "foo", bar: 3 };
const b: MyObj2 = a;

console.log(a);
console.log(b);

const c: (obj: { foo: string }) => void = () => {};
const d: (obj: { foo: string; bar: number }) => void = c;

console.log(c(b));
console.log(d(a));

const func = (foo: string, ...bar: number[]) => bar;
console.log(func("foo"));
console.log(func("bar", 1, 2, 3));

const e: void = undefined;
console.log(e);

interface MyFoo {
  method: () => void;
}

class Foo {
  method(): void {
    console.log("Hello, world!");
  }
}

const obj: MyFoo = new Foo();
const obj2: Foo = obj;
console.log(obj2);
