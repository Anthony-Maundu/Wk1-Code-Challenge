function gradeGenerator (){
    let name =  prompt("Enter student's name:", "");
    let admission = prompt("Enter Admission number:", ""); 
    let grade = prompt("Enter grade:", "");
   
    
    if (grade > 79) {    
        grade = "A"
    }else if (grade < 79 && grade >=60) {
        grade = "B"
    }else if (grade < 49 && grade >=59) {
        grade = "C"
    }else if (grade < 40 && grade >=49) {
        grade = "D"   
    } else {
        grade = "E"
    }
    alert(`Student ${name}, of Admission ${admission} your grade is ${grade}`);
}