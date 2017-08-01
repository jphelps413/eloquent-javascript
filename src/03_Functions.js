console.log('\n\n\n ---------------------- NEW RUN ---------------------\n\n\n');
console.log('\nProblem 03.01 - min');
function min(a, b) {
  return a < b ? a : b;
}

console.log(`Min (0, 10) => ${min(0, 10)}`);
console.log(`Min (0,-10) => ${min(0, -10)}`);

console.log('\nProblem 03.02 - recursion even/odd');
function isEven(org) {
  const num = Math.abs(org);
  if (num > 1) { return isEven(num - 2); }
  return (num === 0);
}

[50, 75, -1, -8, 0].forEach((num) => {
  console.log(`${num} is ${isEven(num) ? 'even' : 'odd'}`);
});

console.log('\nProblem 03.03 - bean counting');
function countChar(str, ch) {
  let hits = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === ch) { hits += 1; }
  }
  return hits;
}

console.log(countChar('BBC', 'B'));
console.log(countChar('kakkerlak', 'k'));
