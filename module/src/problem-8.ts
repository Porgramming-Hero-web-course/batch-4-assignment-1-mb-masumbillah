{
  // problem - 8

  function validateKeys<T extends Object>(obj: T, keys: (keyof T)[]): boolean {
    const boolResult = keys.every((key) => key in obj);
    return boolResult;
  }

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));

  //
}
