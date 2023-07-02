const AND = "AND";

export class BooleanCalculator {
  static evaluate(expression: string): boolean {
    
    if (expression.includes(AND)) {
      const [ leftSide, rightSide] = expression.split(AND).map((e)=> e.trim())
      return this.evaluateSingleExpression(leftSide) && this.evaluateSingleExpression(rightSide)
    }

    return this.evaluateSingleExpression(expression);
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
