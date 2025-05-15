res = document.getElementById("result");

n = parseInt(prompt('Введите кол-во строк: '));
if (isNaN(n) || n <= 0) {
  res.value = 'Кол-во строк должно быть натуральным числом!';
  throw new Error;
}
m = parseInt(prompt('Введите кол-во столбцов: '));
if (isNaN(m) || m <= 0) {
  res.value = 'Кол-во столбцов должно быть натуральным числом!';
  throw new Error;
}

var matrix = generateMatrix(n, m);
displayMatrix(res);
res.value += `\nНомер первого столбца матрицы, в котором есть хотя бы один отрицательный элемент: ${findColWithNeg(matrix) + 1}`;

function randint(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function generateMatrix(n, m) {
  var matrix = [];
  [negI, negJ] = [randint(0, n - 1), randint(0, m - 1)];
  negCount = 0;
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < m; j++)
      if (i == negI && j == negJ || negCount == 1 && j > negJ) {
        negCount++;
        matrix[i].push(randint(-10, -1));
      } else
        matrix[i].push(randint(0, 10));
  }
  return matrix;
}

function findColWithNeg(a) {
  for (let i = 0; i < a.length; i++)
    for (let j = 0; j < a[i].length; j++)
      if (a[i][j] < 0)
        return j;
}

function displayMatrix(elem) {
  matrix.forEach(line => {elem.value += line.join("\t|\t") + "\n"});
}
