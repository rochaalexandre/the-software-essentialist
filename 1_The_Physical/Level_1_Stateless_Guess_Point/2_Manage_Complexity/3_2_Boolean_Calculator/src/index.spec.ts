import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {
  describe("Evaluate simple expressions", () => {
    it.each([
      { expression: "TRUE", result: true },
      { expression: "FALSE", result: false },
      { expression: "NOT TRUE", result: false },
      { expression: "NOT FALSE", result: true },
    ])('Evaluate "$expression" as $result', ({ expression, result }) => {
      expect(BooleanCalculator.evaluate(expression)).toBe(result);
    });
  });

  describe("Evaluate double expressions:", () => {
    it.each([
      { expression: "TRUE AND FALSE", result: false },
      { expression: "TRUE AND TRUE", result: true },
      { expression: "TRUE OR FALSE", result: true },
      { expression: "TRUE OR TRUE", result: true },
      { expression: "FALSE OR TRUE", result: true },
      { expression: "FALSE OR FALSE", result: false },
    ])('Evaluate "$expression" as $result', ({ expression, result }) => {
      expect(BooleanCalculator.evaluate(expression)).toBe(result);
    });
  });

  describe("Evaluate expressions with multiple operators:", () => {
    it.each([
      { expression: "TRUE OR TRUE OR TRUE AND FALSE", result: false },
      { expression: "TRUE OR FALSE AND NOT FALSE", result: true },
    ])('Evaluate "$expression" as $result', ({ expression, result }) => {
      expect(BooleanCalculator.evaluate(expression)).toBe(result);
    });
  });

  describe("Evaluate expressions with multiple operators with Parenthesis:", () => {
    it.each([
      { expression: "(TRUE OR TRUE OR TRUE) AND FALSE", result: false },
      { expression: "(TRUE OR TRUE) AND (NOT FALSE AND TRUE)", result: true },
      { expression: "(TRUE OR TRUE) AND ((TRUE OR TRUE) AND TRUE)", result: true },
      { expression: "NOT (TRUE AND TRUE)", result: false },
      { expression: "NOT (TRUE AND TRUE) AND (TRUE OR FALSE)", result: false },
      { expression: "NOT (TRUE AND (TRUE AND TRUE)) AND (TRUE OR FALSE)", result: false },
    ])('Evaluate "$expression" as $result', ({ expression, result }) => {
      expect(BooleanCalculator.evaluate(expression)).toBe(result);
    });
  });
});
