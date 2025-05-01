var countryNeighbourData = {
    IN: { name: "India", neighbors: ["Pakistan", "China", "Nepal", "Bangladesh", "Bhutan", "Myanmar"] },
    US: { name: "United States", neighbors: ["Canada", "Mexico"] },
    NZ: { name: "New Zealand", neighbors: [] },
    UK: { name: "United Kingdom", neighbors: ["Ireland"] },
    AU: { name: "Australia", neighbors: [] },
    CA: { name: "Canada", neighbors: ["United States"] },
    FR: { name: "France", neighbors: ["Belgium", "Luxembourg", "Germany", "Switzerland", "Italy", "Spain", "Andorra", "Monaco"] },
    DE: { name: "Germany", neighbors: ["Denmark", "Poland", "Czech Republic", "Austria", "Switzerland", "France", "Luxembourg", "Belgium", "Netherlands"] },
    JP: { name: "Japan", neighbors: [] },
    CN: { name: "China", neighbors: ["India", "Pakistan", "Nepal", "Russia", "Mongolia", "Vietnam", "Laos", "Myanmar"] }
};
function fetchCountryNameByCode(code) {
    var upperCaseCode = code.toUpperCase();
    var countryNeighbours = countryNeighbourData[upperCaseCode];
    if (!countryNeighbours) {
        return "Invalid country code.";
    }
    var countryName = countryNeighbours.countryName, neighbors = countryNeighbours.neighbors;
    if (neighbors.length === 0) {
        return "".concat(countryName, " has no adjacent countries.");
    }
    else {
        return "Adjacent countries of ".concat(countryName, ": ").concat(neighbors.join(", "), ".");
    }
}
function main() {
    console.log(fetchCountryNameByCode("IN"));
    console.log(fetchCountryNameByCode("US"));
    console.log(fetchCountryNameByCode("XYZ"));
}
main();
