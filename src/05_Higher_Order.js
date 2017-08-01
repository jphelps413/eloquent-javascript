const data = require('./05_Ancestry.js');

const ancestry = JSON.parse(data);

console.log(`\n\n\n ---------------------- NEW RUN @${new Date().toUTCString()}---------------------\n\n\n`);
console.log('\nProblem 05.01 - flattening\n');

const flat = [[1, 2, 3], [4, 5], [6]].reduce((coll, ele) => coll.concat(ele), []);
console.log(`Flattened: ${flat}`);

console.log('\nProblem 05.02 - Mother-Child\n');

const mothers = ancestry.reduce((coll, p) => {
  if (p.sex === 'f') coll[p.name] = p; // eslint-disable-line no-param-reassign
  return coll;
}, {});

const ages = ancestry.reduce((coll, p) => {
  if (mothers[p.mother] !== undefined) {
    coll.push(p.born - mothers[p.mother].born);
  }
  return coll;
}, []);

function average(ary) {
  return ary.reduce((a, b) => a + b) / ary.length;
}

console.log(`Average age is: ${average(ages)}`);

console.log('\nProblem 05.03 - Life Expectency\n');

const perCentury = ancestry.reduce((coll, p) => {
  const century = Math.ceil(p.died / 100);
  if (coll[century] === undefined) { coll[century] = []; } // eslint-disable-line no-param-reassign
  coll[century].push(p.died - p.born);
  return coll;
}, {});

Object.keys(perCentury).forEach((key) => {
  const avg = perCentury[key].reduce((a, b) => a + b) / perCentury[key].length;
  console.log(`Century ${key} avg ${Math.round(avg * 10) / 10}`);
});

console.log('\nProblem 05.04 - Every and then Some\n');

function every(ary, op) {
  for (let i = 0; i < ary.length; i += 1) {
    if (!op(ary[i])) return false;
  }
  return true;
}

console.log(`every should be true  => ${every([NaN, NaN, NaN], isNaN)}`);
console.log(`every should be false => ${every([NaN, NaN, 4], isNaN)}`);

function some(ary, op) {
  for (let i = 0; i < ary.length; i += 1) {
    if (op(ary[i])) return true;
  }
  return false;
}

console.log(`some should be true  => ${some([NaN, 3, 4], isNaN)}`);
console.log(`some should be false => ${some([2, 3, 4], isNaN)}`);

console.log('*COMPLETED*');
