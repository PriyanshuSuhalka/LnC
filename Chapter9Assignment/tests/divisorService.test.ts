import { DivisorService } from "../src/DivisorService";

describe("DivisorService", () => {
  test("should return 1 for n = 1", () => {
    expect(DivisorService.countDivisors(1)).toBe(1);

  test("should return 2 for prime number n = 2", () => {
    expect(DivisorService.countDivisors(2)).toBe(2);
  });

  test("should return 9 for perfect square n = 36", () => {
    expect(DivisorService.countDivisors(36)).toBe(9);
  });

  });
});
