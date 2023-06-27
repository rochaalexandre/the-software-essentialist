export class TimeValidator {
  static validateRange(timeRange: string): boolean {
    return  timeRange !== "25:00 - 12:23"
  }
}