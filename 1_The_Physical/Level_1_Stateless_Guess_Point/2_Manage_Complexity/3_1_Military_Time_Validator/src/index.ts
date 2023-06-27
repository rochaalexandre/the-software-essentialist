export class TimeValidator {
  private static readonly EARLIEST_HOUR: String = "0001";
  private static readonly LASTEST_HOUR: string = "2359";
  private static readonly RANGE_PATTERN = /(\d{2}:\d{2})\s-\s(\d{2}:\d{2})/;
  static validateRange(timeRange: string): boolean {
    if (this.isInvalidRange(timeRange)) {
      return false
    }

    const range = this.getHoursInTimeRange(timeRange)
    const [startHour, finishHour] = this.convertHoursToNumbers(range)
    const startHourIsAfterFinishHour = startHour > finishHour;

    if (startHourIsAfterFinishHour) {
      return false;
    }

    return  startHour >= Number(this.EARLIEST_HOUR) && finishHour <= Number(this.LASTEST_HOUR)
  }

  static isInvalidRange(range: string) {
    return !this.RANGE_PATTERN.test(range)
  }
  static getHoursInTimeRange(timeRange: string) {
    return timeRange.split("-").map((x) => x.trim())
  }

  static convertHoursToNumbers(range: string[]) {
    return range
    .map(x => x.replace(":", "").trim())
    .map((x) => Number(x));
  }
}