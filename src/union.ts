interface Hoge {
  foo: string;
  bar: number;
}
interface Piyo {
  foo: number;
  baz: boolean;
}

type HogePiyo = Hoge | Piyo;

const obj5: HogePiyo = {
  foo: "hello",
  bar: 0
};

console.log(obj5);

function getFoo(obj: HogePiyo) {
  return obj.foo;
}
