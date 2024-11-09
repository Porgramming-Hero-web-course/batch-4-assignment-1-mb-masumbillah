{
  // problem - 3
  function countWordOccurrences(sentance: string, word: string) {
    const sentanceLower = sentance.toLowerCase();
    const wordLower = word.toLowerCase();

    const arrSentance = sentanceLower.split(" ");

    const wordNumber = arrSentance.filter((w) => w === wordLower).length;
    return wordNumber;
  }

  const result = countWordOccurrences("I love typescript", "typescript");
  console.log(result);
  //
}
