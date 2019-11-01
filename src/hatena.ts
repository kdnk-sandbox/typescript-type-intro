interface MyObj7 {
  foo: string;
  bar?: number;
}

let obj7: MyObj7 = {
  foo: 'string',
};

obj7 = {
  foo: 'foo',
  bar: 100,
};

function func7(obj: MyObj7): number {
  return obj.bar != null ? obj.bar * 100 : 0;
}
