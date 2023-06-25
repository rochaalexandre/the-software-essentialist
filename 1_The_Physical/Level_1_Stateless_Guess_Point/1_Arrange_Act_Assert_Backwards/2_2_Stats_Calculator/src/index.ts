export type StatsResult = {
  min: number;
  max: number;
  count: number;
  average: number;
};

export class StatsCaculator {
  static calculate(numbers: number[]): StatsResult {
    return {
      count: this.count(numbers),
      min: this.min(numbers),
      max: this.max(numbers),
      average: this.average(numbers),
    };
  }

  static average(numbers: number[]): number {
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    const avg = (sum / numbers.length).toFixed(2);
    return Number(avg);
  }

  static count(numbers: number[]): number {
    return numbers.length;
  }

  static min(numbers: number[]): number {
    const sorted = numbers.sort((a, b) => a - b);
    return sorted[0];
  }

  static max(numbers: number[]): number {
    const sorted = numbers.sort((a, b) => b - a);
    return sorted[0];
  }
}
