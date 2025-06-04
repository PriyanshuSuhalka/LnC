export class DivisorService {
  countDivisors(n: number): number {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        count += (i * i === n) ? 1 : 2;
      }
    }
    return count;
  }

  findMatchingDivisors(numbers: number[]): number[] {
    return numbers.map(n => {
      if (n <= 0) throw new Error("Each number must be a positive integer.");
      const reversed = parseInt(n.toString().split("").reverse().join(""), 10);
      return this.countDivisors(n) === this.countDivisors(reversed) ? 1 : 0;
    });
  }
}
