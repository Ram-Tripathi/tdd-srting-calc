function add(str) {
  if (str === "") {
    return 0;
  }

  const normalizedStr = str.replace(/\n/g, ",");
  const numbers = normalizedStr.split(",").map(Number);

  return numbers.reduce((sum, num) => sum + num, 0);
}

export default add;
