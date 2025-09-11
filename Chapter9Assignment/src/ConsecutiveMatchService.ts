import { ConsecutiveMatchService } from "../src/ConsecutiveMatchService";

describe("ConsecutiveMatchService", () => {
  test("should return 2 for k = 15 (matches at 2 and 14)", () => {
    const result = ConsecutiveMatchService.countMatchingConsecutiveDivisors(15);
    expect(result).toBe(2);
  });
});
