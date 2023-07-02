import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {
  describe("Simple expression", () => {
    it('Should evalutate "TRUE" as truthy', () => {
      expect(BooleanCalculator.evaluate("TRUE")).toBeTruthy();
    });

    it('Should evalutate "FALSE" as falsy', () => {
      expect(BooleanCalculator.evaluate("FALSE")).toBeFalsy();
    });

    it('Should evalutate "NOT TRUE" as falsy', () => {
      expect(BooleanCalculator.evaluate("NOT TRUE")).toBeFalsy();
    });

    it('Should evalutate "NOT FALSE" as falsy', () => {
      expect(BooleanCalculator.evaluate("NOT FALSE")).toBeTruthy();
    });
  });

  
});
