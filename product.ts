// This is the Task 4 "Product interface and total price calculation"
interface Product {
    name: string;
    price: number;
  }
  
  function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  // Example for Task 4
  const products: Product[] = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.9 },
    { name: "Orange", price: 1.2 },
  ];
  console.log(calculateTotalPrice(products)); 
  
  //This is the Task 5 "Validate email using a regular expression"
  function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  // Example for Task 5
  console.log(isValidEmail("test@example.com")); 
  console.log(isValidEmail("invalid-email"));    
  