const logs = [];

const getArea = (figureInput, ...values) => {
  if (!isValidArgs(figureInput, values)) return;

  const figure = getFigure(figureInput, values);
  saveExecution(figure);

  if (figure === 'rect') return getRect(...values);
  if (figure === 'trapezoid') return getTrapezoid(...values);
  if (figure === 'circle') return getCircle(...values);
  if (figure === 'circles') return getCircles(...values);
};

const getFigure = (figure, values) => {
  if (figure === 'circle' && values.length > 1) return 'circles';
  return figure;
};

const getRect = (length1, length2) => length1 * length2;

const getTrapezoid = (top, bottom, height) => ((top + bottom) * height) / 2;

const getCircle = (radius) => Math.pow(radius, 2) * Math.PI;

const getCircles = (firstRadius, lastRadius) => {
  let total = 0;
  for (let i = firstRadius; i <= lastRadius; i++) {
    total += Math.pow(i, 2) * Math.PI;
  }
  return total;
};

const saveExecution = (figure) => logs.push(figure);

const printExecutionSequence = () => console.log(`계산수행순서: ${logs}`);

const isValidArgs = (figure, values) => {
  const figures = ['circle', 'rect', 'trapezoid'];

  if (!figures.includes(figure)) {
    console.log('도형의 이름을 바르게 입력하세요.');
    return false;
  }
  if (!values.length) {
    console.log('길이 값을 입력하세요.');
    return false;
  }
  if (
    values.some((value) => value <= 0) ||
    values.some((value) => value % 1 !== 0)
  ) {
    console.log('길이 값은 자연수를 입력하세요.');
    return false;
  }
  if (figure === 'circle' && values[0] > values[1]) {
    console.log('시작 반지름이 종료 반지름보다 클 수 없습니다.');
    return false;
  }

  return true;
};

console.log(getArea('rect', 1, 10));
console.log(getArea('trapezoid', 10, 15, 12));
console.log(getArea('circle', 10));
console.log(getArea('circle', 1, 10));
printExecutionSequence();
