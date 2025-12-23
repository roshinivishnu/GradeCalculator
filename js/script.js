function calculateGrade(){

    let subject1 = Number(prompt("Enter marks for Subject 1 (0-100):"));
    let subject2 = Number(prompt("Enter marks for Subject 2 (0-100):"));
    let subject3 = Number(prompt("Enter marks for Subject 3 (0-100):"));
    let subject4 = Number(prompt("Enter marks for Subject 4 (0-100):"));
    let subject5 = Number(prompt("Enter marks for Subject 5 (0-100):"));

  if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5) ||
        subject1 < 0 || subject1 > 100 || subject2 < 0 || subject2 > 100 || subject3 < 0 || subject3 > 100 ||
        subject4 < 0 || subject4 > 100 || subject5 < 0 || subject5 > 100) {
        alert("Invalid input. Please enter valid marks between 0 and 100 for all subjects.");
        return; 
        }
    

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

    const numberOfSubjects = 5;
    const averageMarks = totalMarks / numberOfSubjects;

    let grade;
    if (averageMarks >= 90) {
        grade = "A+";
    } else if (averageMarks >= 80 && averageMarks < 90) {
        grade = "A";
    } else if (averageMarks >= 70 && averageMarks < 80) {
        grade = "B";
    } else if (averageMarks >= 60 && averageMarks < 70) {
        grade = "C";
    } else if (averageMarks >= 50 && averageMarks < 60) {
        grade = "D";
    } else {
        grade = "F";
    }

     const resultsMessage = `
        Results:
        Total Marks: ${totalMarks}
        Average Marks: ${averageMarks}
        Grade: ${grade}
    `;

    alert(resultsMessage)
}