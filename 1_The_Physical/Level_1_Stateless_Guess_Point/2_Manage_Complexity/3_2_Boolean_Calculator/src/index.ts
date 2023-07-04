const AND_OPERATOR = "AND";
const OR_OPERATOR = "OR";
const CONDITIONAL_OPERATOR = [AND_OPERATOR, OR_OPERATOR];
const PATTERN = /\(([^()]*)\)/g;
export class BooleanCalculator {

  static evaluate(expression: string): boolean {
    const value = expression.match(PATTERN) ? this.handleParenthesisExpression(expression) : expression;

    if (this.hasMultipleConditionalOperators(value)) {
      return this.handleMultiOperatorsCase(value);
    } else if (value.includes(AND_OPERATOR)) {
      return this.handleAndOperator(value);
    } else if (value.includes(OR_OPERATOR)) {
      return this.handleOrOperator(value);
    }

    return this.evaluateSingleExpression(value);
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

  //"TRUE OR FALSE AND NOT FALSE"
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
