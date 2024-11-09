{
  // problem -5

  function getProperty<X, Y extends keyof X>(obj: X, key: Y): X[Y] {
    return obj[key];
  }
  const person = { name: "Alice", age: 30 };
  const result = getProperty(person, "name");
  console.log(result);
  //
}
