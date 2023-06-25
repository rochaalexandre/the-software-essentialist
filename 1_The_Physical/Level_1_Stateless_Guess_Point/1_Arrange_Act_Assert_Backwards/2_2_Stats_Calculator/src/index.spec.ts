import { StatsCaculator } from "./index";

describe("stats calculator", () => {
  it("knows the minimum value in a sequence of integers", () => {
    const numbers = [2, 4, 21, -8, 53, 40];
    expect(StatsCaculator.min(numbers)).toBe(-8);
  });

  it("knows the maximum value in a sequence of integers", () => {
    const numbers = [2, 4, 21, -8, 53, 40];
    expect(StatsCaculator.max(numbers)).toBe(53);
  });

  it("knows the number of elements in a sequence of integers", () => {
    const numbers = [2, 4, 21, -8, 53, 40];
    expect(StatsCaculator.count(numbers)).toBe(6);
  });

  it("knows the average value in a sequence of integers", () => {
    const numbers = [2, 4, 21, -8, 53, 40];
    expect(StatsCaculator.average(numbers)).toBe(18.67);
  });


});
