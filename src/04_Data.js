console.log('\n\n\n ---------------------- NEW RUN ---------------------\n\n\n');
console.log('\nProblem 04.01a - generating ranges (with steps)');

function range(start, end, step) {
  // If no step then default of 1/-1 determined by start or end
  // being larger, which accomodates a range of 1..10 or 10..1
  // without specifying a step.
  if (step === undefined) {
    step = (start < end ? 1 : -1); // eslint-disable-line no-param-reassign
  }

  const ary = [];
  if (step === 0) { return ary; } // avoid the bozos

  // isEnd lets us get away with writing just one loop.
  function isEnd(my, last, s) {
    return (s > 0 ? (my <= end) : (my >= end));
  }

  for (let i = start; isEnd(i, end, step); i += step) {
    ary.push(i);
  }

  return ary;
}

console.log(`Range 1..10 default => ${range(1, 10)}`);
console.log(`Range 1..10 step  2 => ${range(1, 10, 2)}`);
console.log(`Range 5..2  step -1 => ${range(5, 2, -1)}`);
console.log(`Range 10..1 default => ${range(10, 1)}`);

console.log('\nProblem 04.01b - summing ranges');
function sum(ary) {
  let tot = 0;
  for (let i = 0; i < ary.length; i += 1) {
    tot += ary[i];
  }
  return tot;
}

console.log(sum(range(1, 10)));

console.log('\nProblem 04.02a - reverse array');
function reverseArray(forwards) {
  const reversed = [];
  for (let i = 0; i < forwards.length; i += 1) {
    reversed.unshift(forwards[i]);
  }
  return reversed;
}

console.log(`Reverse array 7..13 => ${reverseArray(range(7, 13))}`);

console.log('\nProblem 04.02b - reverse array in place');
function reverseArrayInPlace(ary) {
  const mid = Math.floor(ary.length / 2);
  let end = ary.length - 1;
  for (let beg = 0; beg < mid; beg += 1, end -= 1) {
    [ary[beg], ary[end]] = [ary[end], ary[beg]]; // eslint-disable-line no-param-reassign
  }
}

let inPlace = range(30, 40);
reverseArrayInPlace(inPlace);
console.log(inPlace); // 40..30 odd number of elements

inPlace = range(8, 2, -2);
reverseArrayInPlace(inPlace);
console.log(inPlace); // 2, 4, 6, 8 even number of elements

console.log('\nProblem 04.03a - lists');

function arrayToList(ary) {
  let list;
  for (let i = ary.length - 1; i >= 0; i -= 1) {
    list = { value: ary[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  const ary = [];
  // Do we really need a separate runner, or just use list, or
  // does using list have a smell because we would be modifying
  // arguments on the stack?
  for (let run = list; run !== undefined; run = run.rest) {
    ary.push(run.value);
  }
  return ary;
}

// should list be copied to a new list first?
function prepend(ele, list) {
  return { value: ele, rest: list };
}

// note this is pretty blind and probably dangerous
function nth(list, pos) {
  if (pos === 0) { return list.value; }
  return nth(list.rest, pos - 1);
}

const myList = arrayToList([4, 13, 19, 61]);
const myArray = listToArray(myList);

console.log(`To list  => ${JSON.stringify(myList)}`);
console.log(`To array => ${myArray}`);
console.log(`Prepend 999 => ${JSON.stringify(prepend(999, myList))}`);
console.log(`3rd ent  => ${nth(myList, 3)}`);

console.log('\nProblem 04.04 - deep comparison');
function deepEqual(a, b) {
  // pick off the easiest case first
  if (a === b) { return true; }

  // if either is null then nope
  if (a == null || b == null) { return false; }

  // at this point if either is not an object, then nope
  if (typeof a !== 'object' ||
      typeof b !== 'object') { return false; }

  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) { return false; }

  // march across the property names and verify b has all of the
  // properties that a has and if so the recurse deeper
  for (let p = 0; p < aProps.length; p += 1) {
    const pName = aProps[p];
    if (!bProps.includes(pName) ||
        !deepEqual(a[pName], b[pName])) { return false; }
  }

  return true;
}

const obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
