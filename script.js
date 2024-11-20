// This is the Task 2 "calculate  the total sum and the average of the numbers"
function calculateSumAndAverage(numbers) {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = total / numbers.length;
    return { total, average };
  }
  
  // Example for Task 2
  const numbers = [10, 20, 30, 40];
  console.log(calculateSumAndAverage(numbers)); // { total: 100, average: 25 }
  
  // This is the Task 2 "Remove duplicates from an array"
  function removeDuplicates(array) {
    const uniqueSet = new Set(array);
    return Array.from(uniqueSet);
  }
  
  // Example for Task 3
  const strings = ["apple", "banana", "apple", "orange", "banana"];
  console.log(removeDuplicates(strings));
  