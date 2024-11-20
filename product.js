// Task 4: Product total price calculation
function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
// Example for Task 4
var products = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.9 },
    { name: "Orange", price: 1.2 },
];
console.log(calculateTotalPrice(products)); // Output: 3.6
// Task 5: Validate email using a regular expression
function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
// Example for Task 5
console.log(isValidEmail("test@example.com")); // Output: true
console.log(isValidEmail("invalid-email")); // Output: false
