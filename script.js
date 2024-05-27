function calculateGPA() {
    const subjects = [
        { id: 'biogeography', credits: 3 },
        { id: 'animalDiversity', credits: 5 },
        { id: 'chemistry1', credits: 3 },
        { id: 'chemistry2', credits: 2 },
        { id: 'practicalChemistry', credits: 3 },
        { id: 'generalThermal', credits: 3 },
        { id: 'waves', credits: 2 },
        { id: 'electromagnetism', credits: 3 },
        { id: 'msu', credits: 2 },
        { id: 'dsuEthics', credits: 2 },
        { id: 'fnu', credits: 2 }
    ];

    let totalGradePoints = 0;
    let totalCredits = 0;

    subjects.forEach(subject => {
        const grade = parseFloat(document.getElementById(subject.id).value);
        if (!isNaN(grade)) {
            totalGradePoints += grade * subject.credits;
            totalCredits += subject.credits;
        }
    });

    const gpa = totalCredits ? (totalGradePoints / totalCredits).toFixed(2) : 0.00;
    document.getElementById('gpa').textContent = gpa;
}
