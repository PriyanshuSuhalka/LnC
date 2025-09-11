import readline from "readline";
import { ConsecutiveMatchService } from "./ConsecutiveMatchService";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a non-negative integer: ", (answer) => {
  try {
    const input = parseInt(answer, 10);
    const result = ConsecutiveMatchService.countMatchingConsecutiveDivisors(input);
    console.log(`Matching consecutive divisor counts: ${result}`);
  } catch (err: any) {
    console.error("Error:", err.message);
  } finally {
    rl.close();
  }
});
