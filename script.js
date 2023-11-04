function decimalToBinary(decimalNumber) {
  if (isNaN(decimalNumber) || decimalNumber < 0) {
    return "Invalid input";
  }

  return decimalNumber.toString(2);
}

// Example usage:
const input1 = 7;
const binary1 = decimalToBinary(input1);
console.log(binary1); // Output: "111"

const input2 = 10;
const binary2 = decimalToBinary(input2);
console.log(binary2); // Output: "1010"

const input3 = 33;
const binary3 = decimalToBinary(input3);
console.log(binary3); // Output: "100001"
