import BigNumber from 'bignumber.js';

export function logAmount (amount, power) {
  const x = new BigNumber(amount);
  const exp = new BigNumber(10).pow(power);

  const calculated = x.div(exp);
  return calculated.toFixed();
}

export function powAmount (amount, power) {
  const x = new BigNumber(amount);
  const exp = new BigNumber(10).pow(power);

  const calculated = x.multipliedBy(exp);
  return calculated.toFixed(0);
}
