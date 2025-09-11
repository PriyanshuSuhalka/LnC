import { DivisorService } from "./DivisorService";
import { InputValidator } from "./InputValidator";

export class ConsecutiveMatchService {
  static countMatchingConsecutiveDivisors(limit: number): number {
    InputValidator.validate(limit);
    let count = 0;
    for (let n = 2; n <= limit; n++) {
      if (DivisorService.countDivisors(n) === DivisorService.countDivisors(n - 1)) {
        count++;
      }
    }
    return count;
  }
}
