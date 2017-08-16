const addStringDiff = (string1, string2) => {
  const longer = string1.length > string2.length ? string1: string2;
  const shorter = string1.length > string2.length ? string2 : string1;
  let graph = createGraph(shorter);

  graph.forEach((obj, index) => {
    graph[index].sum = findSubStringSum(shorter.slice(index), longer);
  });

  return getAsciiSum(longer) + getAsciiSum(shorter) - 2*graph.map(obj => obj.sum).reduce(getLargerValue, 0);
}

function findSubStringSum(shorter, longer) {
  if (shorter.length == 1) {
    return longer.indexOf(shorter) > -1 ? getAsciiValue(shorter) : 0;
  } else if (longer.indexOf(shorter) < 0) {
    return findSubStringSum(shorter.slice(0, -1), longer);
  } else {
    return getAsciiSum(shorter);
  }
}

const testAddStringDiff = (str1, str2, diffString) => {
  const sumDiffString = getAsciiSum(diffString);
  const calcSumDiffString = addStringDiff(str1, str2);
  console.log(calcSumDiffString === sumDiffString ? `Passed your test: ${sumDiffString}.` : `Failed your test. Sorry: ${calcSumDiffString} is supposed to be ${sumDiffString}`);
};

testAddStringDiff('cat', 'at', 'c');
testAddStringDiff('stand', 'standing', 'ing');
testAddStringDiff('abandon', 'land', 'ablon');
testAddStringDiff('maru', 'miyu', 'marmiy');
testAddStringDiff('justin', 'dj', 'ustind');
testAddStringDiff('girlfriend', 'agony', 'girlfriedagoy');

function getLargerValue(a, b) {
  return a > b ? a : b;
}

function createGraph(string) {
  return string.split('').map(char => ({char, sum: 0}));
}

function getAsciiSum(string) {
  return string.split('').map(getAsciiValue).reduce(getSum, 0);
}

function getAsciiValue(char) {
  return char.charCodeAt(0);
}
function getSum(total, value) {
  return total + value;
}

