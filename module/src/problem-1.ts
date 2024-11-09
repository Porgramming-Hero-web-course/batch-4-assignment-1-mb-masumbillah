{
  //    <------------ problem : 1 -------------->

  function sumArray(arrData: number[]): number {
    const sumArr = arrData.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sumArr;
  }
  const result = sumArray([1, 2, 3, 4, 5]);
  console.log(result);

  //
}
