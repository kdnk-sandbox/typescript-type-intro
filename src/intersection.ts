interface Hoge {
  type: "hoge";
  foo: string;
}

interface Piyo {
  type: "piyo";
  bar: number;
}

interface Fuga {
  baz: boolean;
}

type Obj = (Hoge | Piyo) & Fuga;

function func(obj: Obj) {
  console.log(obj.baz);
  if (obj.type === "hoge") {
    console.log(obj.foo);
  } else {
    console.log(obj.bar);
  }
}
