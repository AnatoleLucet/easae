// https://easgs.net/

// reduce de num of chars
const { cos: c, pow: p, sqrt: sq, sin: s, PI } = Math;

export const easeInSine = (x: number): number =>
  1 - c((x * PI) / 2);

export const easeOutSine = (x: number): number => s((x * PI) / 2);

export const easeInOutSine = (x: number): number =>
  -(c(PI * x) - 1) / 2;

export const easeInQuad = (x: number): number => x * x;

export const easeOutQuad = (x: number): number => 1 - (1 - x) * (1 - x);

export const easeInOutQuad = (x: number): number =>
  x < 0.5 ? 2 * x * x : 1 - p(-2 * x + 2, 2) / 2;

export const easeInCubic = (x: number): number => x * x * x;

export const easeOutCubic = (x: number): number => 1 - p(1 - x, 3);

export const easeInOutCubic = (x: number): number =>
  x < 0.5 ? 4 * x * x * x : 1 - p(-2 * x + 2, 3) / 2;

export const easeInQuart = (x: number): number => x * x * x * x;

export const easeOutQuart = (x: number): number => 1 - p(1 - x, 4);

export const easeInOutQuart = (x: number): number =>
  x < 0.5 ? 8 * x * x * x * x : 1 - p(-2 * x + 2, 4) / 2;

export const easeInQuint = (x: number): number => x * x * x * x * x;

export const easeOutQuint = (x: number): number => 1 - p(1 - x, 5);

export const easeInOutQuint = (x: number): number =>
  x < 0.5 ? 16 * x * x * x * x * x : 1 - p(-2 * x + 2, 5) / 2;

export const easeInExpo = (x: number): number =>
  x === 0 ? 0 : p(2, 10 * x - 10);

export const easeOutExpo = (x: number): number =>
  x === 1 ? 1 : 1 - p(2, -10 * x);

export const easeInOutExpo = (x: number): number =>
  x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? p(2, 20 * x - 10) / 2
    : (2 - p(2, -20 * x + 10)) / 2;

export const easeInCirc = (x: number): number =>
  1 - sq(1 - p(x, 2));

export const easeOutCirc = (x: number): number =>
  sq(1 - p(x - 1, 2));

export const easeInOutCirc = (x: number): number =>
  x < 0.5
    ? (1 - sq(1 - p(2 * x, 2))) / 2
    : (sq(1 - p(-2 * x + 2, 2)) + 1) / 2;

export const easeInBack = (x: number): number => {
  const c1 = 1.70158;
  return (c1 + 1) * x * x * x - c1 * x * x;
};

export const easeOutBack = (x: number): number => {
  const c1 = 1.70158;
  return 1 + (c1 + 1) * p(x - 1, 3) + c1 * p(x - 1, 2);
};

export const easeInOutBack = (x: number): number => {
  const c1 = 1.70158;
  const c2 = c1 * 1.525;
  return x < 0.5
    ? (p(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
    : (p(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
};

export const easeInElastic = (x: number): number =>
  x === 0
    ? 0
    : x === 1
    ? 1
    : -p(2, 10 * x - 10) *
      s((x * 10 - 10.75) * ((2 * PI) / 3));

export const easeOutElastic = (x: number): number =>
  x === 0
    ? 0
    : x === 1
    ? 1
    : p(2, -10 * x) * s((x * 10 - 0.75) * ((2 * PI) / 3)) +
      1;

export const easeInOutElastic = (x: number): number => {
  const c5 = (2 * PI) / 4.5;
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? -(p(2, 20 * x - 10) * s((20 * x - 11.125) * c5)) / 2
    : (p(2, -20 * x + 10) * s((20 * x - 11.125) * c5)) / 2 + 1;
};

export const easeOutBounce = (x: number): number => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x < 1 / d1) return n1 * x * x;
  else if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
  else if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
  else return n1 * (x -= 2.625 / d1) * x + 0.984375;
};

export const easeInBounce = (x: number): number => 1 - easeOutBounce(1 - x);

export const easeInOutBounce = (x: number): number =>
  x < 0.5
    ? (1 - easeOutBounce(1 - 2 * x)) / 2
    : (1 + easeOutBounce(2 * x - 1)) / 2;
