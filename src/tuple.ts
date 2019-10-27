function bind<A, B extends any[], C>(
  func: (v: A, ...args: B) => C,
  value: A
): (...args: B) => C {
  return (...args) => func(value, ...args);
}

const add = (x: number, y: number) => x + y;

const add1 = bind(add, 1);
