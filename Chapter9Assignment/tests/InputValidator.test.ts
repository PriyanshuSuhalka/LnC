import { InputValidator } from "../src/InputValidator";

describe("InputValidator", () => {
  test("should throw for non-number input", () => {
    // @ts-ignore
    expect(() => InputValidator.validate("abc")).toThrow("Input must be a number");
  });
});
