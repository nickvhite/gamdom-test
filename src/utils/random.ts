export function getRandom(min: number, max: number, digits: number = 0): number {
  const random = Math.random() * (max - min) + min;
  return parseFloat(random.toFixed(digits));
}