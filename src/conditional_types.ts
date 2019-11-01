interface Obj1000 {
  foo: string;
  bar: {
    hoge: number;
  }
}


type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}
