import { DivisorService } from "./src/divisorService";

const service = new DivisorService();
const input = [3, 15, 100];
const result = service.findMatchingDivisors(input);

console.log("Results:", result);