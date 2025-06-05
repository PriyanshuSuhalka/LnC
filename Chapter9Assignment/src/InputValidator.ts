export class InputValidator {
  static validate(input: number): void {
    if (typeof input !== "number" || isNaN(input)) {
      throw new Error("Input must be a number");
    }
    if (!Number.isInteger(input) || input < 0) {
      throw new Error("Input must be a non-negative integer");
    }
  }
}
