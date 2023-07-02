export class BooleanCalculator {
  static evaluate(expression: string): boolean {
      return this.evaluateSingleExpression(expression)
  }

  static evaluateSingleExpression(expression:string) {
    if (expression.startsWith("NOT")) {
      const value = expression.replace("NOT ", "");
      return !this.valueIsTrue(value);
    }
    return this.valueIsTrue(expression);
  }
  static valueIsTrue(value: string) {
    return value === "TRUE";
  }
}