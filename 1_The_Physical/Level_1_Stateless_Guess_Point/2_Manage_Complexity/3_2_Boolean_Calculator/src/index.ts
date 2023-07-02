const AND_OPERATOR = "AND";
const OR_OPERATOR = "OR";

export class BooleanCalculator {
  static evaluate(expression: string): boolean {
    if (expression.includes(AND_OPERATOR)) {
      return this.handleAndOperator(expression);
    } else if (expression.includes(OR_OPERATOR)) {
      return this.handleOrOperator(expression);
    }

    return this.evaluateSingleExpression(expression);
  }

  static handleAndOperator(expression: string) {
    const [leftSide, rightSide] = expression
      .split(AND_OPERATOR)
      .map((e) => e.trim());
    return (
      this.evaluateSingleExpression(leftSide) &&
      this.evaluateSingleExpression(rightSide)
    );
  }

  static handleOrOperator(expression: string) {
    const [leftSide, rightSide] = expression
      .split(OR_OPERATOR)
      .map((e) => e.trim());
    return (
      this.evaluateSingleExpression(leftSide) ||
      this.evaluateSingleExpression(rightSide)
    );
  }

  static evaluateSingleExpression(expression: string) {
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
