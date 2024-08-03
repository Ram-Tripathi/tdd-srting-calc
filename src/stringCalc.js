function add(str) {
  if (str === "") {
    return 0;
  }

  let delimiter = /,|\n/;
  let numbersStr = str;

  if (str.startsWith("//")) {
    const delimiterEndIndex = str.indexOf("\n");
    delimiter = new RegExp(str.substring(2, delimiterEndIndex));
    numbersStr = str.substring(delimiterEndIndex + 1);
  }

  const numbers = numbersStr.split(delimiter).map(Number);

  const negativeNumbers = numbers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }

  return numbers.reduce((sum, num) => sum + num, 0);
}

export default add;
