function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num ** 2;  // Square the even numbers
        } else {
            return num * 3;  // Triple the odd numbers
        }
    });
}



var processArray = processArray([4, 5, 8]);
console.log(processArray);

function formatArrayStrings(stringArray, numberArray) {
    var new_string = [];
    for (let i = 0; i < stringArray.length; i++) {
        if (numberArray[i] % 2 === 0) {
            new_string.push(stringArray[i].toUpperCase());
        } else {
            new_string.push(stringArray[i].toLowerCase());
        }
    }

    return new_string;

}

var string = ["kofi", "ama", "yaw"];

var new_formatted_string = formatArrayStrings(string, processArray);
console.log(new_formatted_string);
