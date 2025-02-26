class SubarrayMeanCalculator {
    private prefixSum: number[];

    constructor(private numbers: number[]) {
        this.prefixSum = this.computePrefixSum(numbers);
    }

    private computePrefixSum(numbers: number[]): number[] {
        const prefixSum = new Array(numbers.length + 1).fill(0);
        for (let i = 1; i <= numbers.length; i++) {
            prefixSum[i] = prefixSum[i - 1] + numbers[i - 1];
        }
        return prefixSum;
    }

    public getFloorMean(left: number, right: number): number {
        const sum = this.prefixSum[right] - this.prefixSum[left - 1];
        return Math.floor(sum / (right - left + 1));
    }
}

class QueryProcessor {
    private calculator: SubarrayMeanCalculator;

    constructor(numbers: number[]) {
        this.calculator = new SubarrayMeanCalculator(numbers);
    }

    public processQueries(queries: number[][]): number[] {
        return queries.map(([left, right]) => this.calculator.getFloorMean(left, right));
    }
}

// Read input
function main(): void {
    const inputLines: string[] = prompt("Enter input:")?.split("\n") || [];
    const [N, Q] = inputLines[0].split(" ").map(Number);
    const numbers = inputLines[1].split(" ").map(Number);
    
    const queries: number[][] = inputLines.slice(2).map(line => line.split(" ").map(Number));
    
    const processor = new QueryProcessor(numbers);
    const results = processor.processQueries(queries);
    
    console.log(results.join("\n"));
}

main();
