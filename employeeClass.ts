class Employee {
    private name: string;
    private age: number;
    private salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number): void {
        this.age = age;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(salary: number): void {
        this.salary = salary;
    }
}

const employee = new Employee("Priyanshu Suhalka", 24, 1000000);
console.log(employee.getName());  
employee.setSalary(155000);
console.log(employee.getSalary());

//This is a data structure because it reveals the private members using getters and setters.