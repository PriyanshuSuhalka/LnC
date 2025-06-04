import { DivisorService } from "../src/divisorService";

describe("DivisorService", () => {
  let service: DivisorService;

  beforeEach(() => {
    service = new DivisorService();
  });

  test("should return 1 for 3 (3 and reverse 3 both have 2 divisors)", () => {
    expect(service.findMatchingDivisors([3])).toEqual([1]);
  });

  test("should return 1 for 15 (15 and 51 both have 4 divisors)", () => {
    expect(service.findMatchingDivisors([15])).toEqual([1]);
  });

  test("should return 0 for 100 (100 has 9, 1 has 1 divisor)", () => {
    expect(service.findMatchingDivisors([100])).toEqual([0]);
  });

  test("should throw error for 0", () => {
    expect(() => service.findMatchingDivisors([0])).toThrow("Each number must be a positive integer.");
  });

  test("should throw error for negative input", () => {
    expect(() => service.findMatchingDivisors([-5])).toThrow("Each number must be a positive integer.");
  });

});
