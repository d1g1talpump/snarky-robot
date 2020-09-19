let number = prompt("What is your favorite number?")

if (number == 42) {
    response = "Yay! That's my favorite too!";
} else if (number < 42) {
    response = "Eh, that's OK but " + ++number + " would be even better";
} else if (number > 42) {
    response = "LAME. That number is too large!";
} else {
    response = "Err, something went wrong!";
}

console.log(response)
