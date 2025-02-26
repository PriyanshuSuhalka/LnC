class Customer {
    constructor(
        public customerID: string,
        public companyName: string,
        public contactName: string,
        public country: string
    ) {}
}

class CustomerSearch {
    private customers: Customer[];

    constructor(customers: Customer[]) {
        this.customers = customers;
    }

    searchByCountry(country: string): Customer[] {
        return this.customers
            .filter(customer => customer.country.toLowerCase().includes(country.toLowerCase()))
            .sort((a, b) => a.customerID.localeCompare(b.customerID));
    }

    searchByCompanyName(company: string): Customer[] {
        return this.customers
            .filter(customer => customer.companyName.toLowerCase().includes(company.toLowerCase()))
            .sort((a, b) => a.customerID.localeCompare(b.customerID));
    }

    searchByContact(contact: string): Customer[] {
        return this.customers
            .filter(customer => customer.contactName.toLowerCase().includes(contact.toLowerCase()))
            .sort((a, b) => a.customerID.localeCompare(b.customerID));
    }

    exportToCSV(data: Customer[]): string {
        return data
            .map(item => `${item.customerID},${item.companyName},${item.contactName},${item.country}`)
            .join("\n");
    }
}

const customers = [
    new Customer("1", "ABC Corp", "John Doe", "USA"),
    new Customer("2", "XYZ Ltd", "Jane Smith", "Canada"),
    new Customer("3", "LMN Inc", "Alice Brown", "UK")
];

const customerSearch = new CustomerSearch(customers);

console.log(customerSearch.searchByCountry("USA"));
console.log(customerSearch.searchByCompanyName("XYZ"));
console.log(customerSearch.searchByContact("Alice"));
console.log(customerSearch.exportToCSV(customers));
