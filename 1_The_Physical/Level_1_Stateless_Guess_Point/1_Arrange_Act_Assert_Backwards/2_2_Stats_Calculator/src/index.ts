export class StatsCaculator {
  static average(numbers: number[]): any {
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    const avg = (sum / numbers.length).toFixed(2)
    return Number(avg)
  }

  static count(numbers: number[]): any {
    return numbers.length;
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
