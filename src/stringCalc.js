function add(str) {
  if (str === "") {
    return 0;
  }

  const numbers = str.split(",").map(Number);
  return numbers.reduce((sum, num) => sum + num, 0);
}

export default add;
