function convertToVND(number) {
    // Check if input is a number
    if (isNaN(number)) {
        return "Invalid input. Please provide a valid number.";
    }

    // Convert number to string
    let numStr = number.toString();

    // Split the string into integer and decimal parts
    let parts = numStr.split('.');

    // Format the integer part with thousand separators
    let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Concatenate the integer and decimal parts
    let result = integerPart + 'd';

    // If decimal part exists, add it to the result
    if (parts.length === 2) {
        result += '.' + parts[1];
    }

    return result;
}

export {convertToVND}