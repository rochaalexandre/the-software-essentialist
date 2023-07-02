const AND_OPERATOR = "AND";
const OR_OPERATOR = "OR";
const CONDITIONAL_OPERATOR = [AND_OPERATOR, OR_OPERATOR];

export class BooleanCalculator {

  static evaluate(expression: string): boolean {
    if (this.hasMultipleConditionalOperators(expression)) {
      return this.handleMultiOperatorsCase(expression);
    } else if (expression.includes(AND_OPERATOR)) {
      return this.handleAndOperator(expression);
    } else if (expression.includes(OR_OPERATOR)) {
      return this.handleOrOperator(expression);
    }

    return this.evaluateSingleExpression(expression);
  }

  private static hasMultipleConditionalOperators(expression: string) {
    return  expression.split(' ').filter((part) => [AND_OPERATOR, OR_OPERATOR].includes(part)).length > 1
  }

  //"TRUE OR FALSE AND NOT FALSE"
  private static handleMultiOperatorsCase(expression: string) {
    let tokens = expression.split(' ');
    let hasOperatorTrue = true;
    while (hasOperatorTrue) {
      tokens = this.evaluateFirstExpression(tokens);
      hasOperatorTrue = this.hasMultipleConditionalOperators(tokens.join(' '))
    }
   return this.evaluate(tokens.join(' '))
  }

  private static evaluateFirstExpression(tokens: string[]) {
    const firstOperatorIndex = tokens.findIndex((part) => CONDITIONAL_OPERATOR.includes(part))
    const firstExpression = tokens.slice(0, firstOperatorIndex + 2).join(' ')
    const result = this.evaluate(firstExpression) ? 'TRUE' : 'FALSE'
    return [result].concat(tokens.slice(firstOperatorIndex + 2))
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
