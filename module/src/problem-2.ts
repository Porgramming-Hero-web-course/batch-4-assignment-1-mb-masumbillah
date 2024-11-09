{
  // problem-2

  function removeDuplicates(arrData: number[]): number[] {
    const filter = arrData.filter((value, index, array) => array.indexOf(value) === index)
    return filter

    // return [...new Set(arrData)];
  }

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(result);

  //
}
