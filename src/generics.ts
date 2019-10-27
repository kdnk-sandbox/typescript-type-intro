class Foo<T> {
  constructor(obj: T) {}
}

const obj1 = new Foo<string>("foo");

function func<T>(obj: T): void {}

func<number>(3);
