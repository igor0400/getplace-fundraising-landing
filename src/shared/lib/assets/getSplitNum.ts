export const getSplitNum = (num: number) => {
  const result: string[] = [];
  const revStrNum = `${num}`.split('').reverse().join('');
  let intermediateValue = '';

  for (let i = 0; i < revStrNum.length; i++) {
    const item = revStrNum[i];

    if (intermediateValue.length < 3) {
      intermediateValue = item + intermediateValue;
    } else {
      result.push(intermediateValue);
      intermediateValue = item;
    }

    if (i + 1 === revStrNum.length) {
      result.push(intermediateValue);
    }
  }

  return result.reverse().join(' ');
};
