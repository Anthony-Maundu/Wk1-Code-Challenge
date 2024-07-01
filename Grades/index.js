// Function generates grades based on user input
function gradeGenerator() {
    let name = prompt("Enter student's name:", "");
    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Please enter a valid name containing only alphabets.");
        return;
    }

    let admission = prompt("Enter Admission number:", "");
    if (!/^\d+$/.test(admission)) {
        alert("Please enter a valid admission number containing only numbers.");
        return;
    }

    let grade = prompt("Enter grade:", "");
    let gradeNum = parseInt(grade, 10);
    if (isNaN(gradeNum) || gradeNum < 1 || gradeNum > 100) {
        alert("Please enter a valid grade between 1 and 100.");
        return;
    }

    // Determines grade based on numeric input
    if (gradeNum > 79) {
        grade = "A";
    } else if (gradeNum >= 60) {
        grade = "B";
    } else if (gradeNum >= 50) {
        grade = "C";
    } else if (gradeNum >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }
    
    // Displays result to the user
    alert(`Student ${name}, of Admission ${admission} your grade is ${grade}`);
}
