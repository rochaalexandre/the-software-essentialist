import { StatsCaculator } from "./index";

const NUMBERS = [2, 4, 21, -8, 53, 40];

describe("stats calculator", () => {
  it("knows the minimum value in a sequence of integers", () => {
    const stats = StatsCaculator.calculate(NUMBERS)
    expect(stats.min).toBe(-8);
  });

  it("knows the maximum value in a sequence of integers", () => {
    const stats = StatsCaculator.calculate(NUMBERS)
    expect(stats.max).toBe(53);
  });

  it("knows the number of elements in a sequence of integers", () => {
    const stats = StatsCaculator.calculate(NUMBERS)
    expect(stats.count).toBe(6);
  });

  it("knows the average value in a sequence of integers", () => {
    const stats = StatsCaculator.calculate(NUMBERS)
    expect(stats.average).toBe(18.67);
  });

});
