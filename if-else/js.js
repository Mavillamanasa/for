const score = 85;

const grade = (score >= 90) ? 'A' :
              (score >= 80) ? 'B' :
              (score >= 70) ? 'C' :
              (score >= 60) ? 'D' : 'F';

console.log(`Your grade is: ${grade}`);


const age = 48;

const isAdult = (age >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult);

const day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
} else {
    console.log("It's a weekday.");
}

const age1 = 20;
const citizenship = true;

if (age1 >= 18 && citizenship) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}


const username = "Admin";
const password = "12345";

if (username.toLowerCase() === "admin" && password === "12345") {
    console.log("Login successful.");
} else {
    console.log("Invalid username or password.");
}
