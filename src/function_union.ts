interface Hoge2 {
  foo: string;
  bar: number;
}
interface Piyo2 {
  foo: string;
  baz: boolean;
}

type HogeFunc = (arg: Hoge2) => number;
type PiyoFunc = (arg: Piyo2) => boolean;

function func2(arg) {
  return () => 4
};

// declare function func2: HogeFunc | PiyoFunc;

// resは number | boolean 型
const res = func2({
  foo: 'foo',
  bar: 123,
  baz: false,
});
