function func(value: string | number): number {
  if ("string" === typeof value) {
    return value.length;
  } else {
    return value;
  }
}
