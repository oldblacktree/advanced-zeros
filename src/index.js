module.exports = function getZerosCount(number, base) {

  let remainder = base;
  let multipliers = {};
  let divisor = 2;
  let min = Infinity;


  while (remainder !== 1) {
    if (remainder % divisor === 0) {
      if (multipliers.hasOwnProperty(divisor)) {
        multipliers[divisor][0] += 1;
      } else multipliers[divisor] = [1];

      remainder = remainder / divisor;
      continue;
    }
    divisor++;
  }

 
  for (let key in multipliers) {
    multipliers[key].push(getMultiplierAmount(number, key));
    if (multipliers[key][1] / multipliers[key][0] < min) {
      min = Math.floor(multipliers[key][1] / multipliers[key][0]);
    }
  }

  return min;


  function getMultiplierAmount(number, multiplier) {
    let amount = 0;
    let divisor = multiplier;

    while (number / divisor >= 1) {
      amount += Math.floor(number / divisor);
      divisor = divisor * multiplier;
    }
    return amount;
  }

}