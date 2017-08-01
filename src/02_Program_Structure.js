console.log('\n\n\n ---------------------- NEW RUN ---------------------\n\n\n');
console.log('\nProblem 1');
for (let i = 1; i <= 7; i += 1) { console.log(Array(i + 1).join('#')); }

console.log('\nProblem 2a - brute');
for (let i = 1; i <= 50; i += 1) {
  if (i % 3 === 0) {
    console.log('fizz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else { console.log(i); }
}

console.log('\nProblem 2b - clever?');
for (let i = 1; i <= 50; i += 1) {
  let outw = '';
  if (i % 3 === 0) outw += 'Fizz';
  if (i % 5 === 0) outw += 'Buzz';
  console.log(outw || i);
}

console.log('\nProblem 3 - Chessboard');
const cols = 13;
const line = Array(Math.round(cols / 2) + 2).join(' #');
for (let row = 0; row < cols; row += 1) {
  console.log(`|${line.substr((row % 2), cols)}|`);
}

