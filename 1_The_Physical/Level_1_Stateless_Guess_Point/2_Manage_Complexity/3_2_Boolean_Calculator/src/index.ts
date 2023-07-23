const AND_OPERATOR = "AND";
const OR_OPERATOR = "OR";
const CONDITIONAL_OPERATOR = [AND_OPERATOR, OR_OPERATOR];
const PATTERN = /\(([^()]*)\)/g;
export class BooleanCalculator {

  static evaluate(param: string): boolean {
    const expression = param.match(PATTERN) ? this.handleParenthesisExpression(param) : param;

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

  private static handleParenthesisExpression(expression: string) {
    let result = expression
    while (result.match(PATTERN))
      result =  result.replace(PATTERN, (group) => {
      const cleanValue = group.replace("(", "").replace(")", "")
      return String(this.evaluate(cleanValue)).toUpperCase()
    })
    return result;
  }

  private static handleMultiOperatorsCase(expression: string) {
    let tokens = expression;
    let hasOperatorTrue = true;
    while (hasOperatorTrue) {
      tokens = this.evaluateFirstExpression(tokens.split(' '));
      hasOperatorTrue = this.hasMultipleConditionalOperators(tokens)
    }
    return this.evaluate(tokens)
  }

  private static evaluateFirstExpression(tokens: string[]) {
    const firstOperatorIndex = tokens.findIndex((part) => CONDITIONAL_OPERATOR.includes(part))
    const firstExpression = tokens.slice(0, firstOperatorIndex + 2).join(' ')
    const result = this.evaluate(firstExpression) ? 'TRUE' : 'FALSE'
    return tokens.join(' ').replace(firstExpression, result)
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
