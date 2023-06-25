export class StatsCaculator {
  static count(numbers: number[]): any {
    return numbers.length
  }
  static min(numbers: number[]): any {
    const sorted = numbers.sort((a, b) => b - a);
    return sorted.pop();
  }

  static max(numbers: number[]): any {
    const sorted = numbers.sort((a, b) => a - b);
    return sorted.pop();
  }
}
