import { DivisorService } from "../src/DivisorService";

describe("DivisorService", () => {
  test("should return 1 for n = 1", () => {
    expect(DivisorService.countDivisors(1)).toBe(1);
  });
});
