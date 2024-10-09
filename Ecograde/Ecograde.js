// User Registration
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate registration
    alert("User registered successfully!");
});

// Economic Data Submission
document.getElementById('economicDataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Sample grading logic
    let income = parseFloat(document.getElementById('jobIncome').value);
    let savings = parseFloat(document.getElementById('savings').value);
    let debt = parseFloat(document.getElementById('debt').value) || 0;
    let totalScore = (income + savings - debt) / 1000;
    
    // Assign grades based on score
    let grade;
    if (totalScore > 100) {
        grade = 'A';
    } else if (totalScore > 75) {
        grade = 'B';
    } else if (totalScore > 50) {
        grade = 'C';
    } else {
        grade = 'D';
    }
    
    document.getElementById('userGrade').textContent = grade;
    document.getElementById('userScore').textContent = totalScore.toFixed(2);
    alert("Economic data submitted and grade updated!");
});
