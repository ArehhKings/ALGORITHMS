function getPosition(number) {
  // Initialize the position to 1.
  let position = "";
    if(number == 0 || number.length  == 0){
        return '0'
    }
  // Loop through all the numbers from 1 to number + 1.
  for (let i = 1; i <= number; i++) {
    // Sort the digits of the number.
    const digits = String(i).split("");

    // If the digits are all 1, then set the position to the current number.
    if (digits.length === 1 && digits[0] === "1") {
      position = i;
      break;
    }
  }

  // Return the position.
  return position;
}