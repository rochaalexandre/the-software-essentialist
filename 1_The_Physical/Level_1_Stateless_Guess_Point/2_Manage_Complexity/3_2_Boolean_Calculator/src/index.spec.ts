import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {
  describe("Evaluate simple expressions", () => {
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

  describe("Evaluate double expressions", () => {
    it('Should evalutate "TRUE AND FALSE" as truthy', () => {
      expect(BooleanCalculator.evaluate("TRUE AND FALSE")).toBeFalsy()
    });

    it('Should evalutate "TRUE AND TRUE" as truthy', () => {
      expect(BooleanCalculator.evaluate("TRUE AND TRUE")).toBeTruthy()
    });

    it('Should evalutate "TRUE OR FALSE" as truthy', () => {
      expect(BooleanCalculator.evaluate("TRUE OR FALSE")).toBeTruthy()
    });

    it('Should evalutate "FALSE OR TRUE" as truthy', () => {
      expect(BooleanCalculator.evaluate("FALSE OR TRUE")).toBeTruthy()
    });

  })

});
