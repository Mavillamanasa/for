function studentName() {
    console.log("First Name: Manasa");
    studentSurname(); // Calling the second function within the first function
}

function studentSurname() {
    console.log("Last Name: Mavilla");
}

// Call the functions to execute
studentName();