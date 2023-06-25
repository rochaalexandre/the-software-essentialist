export class StatsCaculator {
  static min(numbers: number[]): any {
    const sorted = numbers.sort((a, b) => b - a);
    return sorted.pop();
  }

  static max(numbers: number[]): any {
    const sorted = numbers.sort((a, b) => a - b);
    return sorted.pop();
  }
}
