

// ==================== BASE IMMUTABLE DATASET ====================

const students = [
    { name: 'Asad', scores: [85, 90, 78, 92], present: true },
    { name: 'Sara', scores: [70, 65, '80', 75], present: true },
    { name: 'Ali', scores: [55, 60, 50, null], present: false },
    { name: 'Fatima', scores: [95, 98, 100, 92], present: true },
    { name: 'Umar', scores: [], present: true }
];

// ==================== 1. getAverage(scores) ====================

function getAverage(scores) {

    if (!Array.isArray(scores) || scores.length === 0) {
        return 0;
    }

    let validScoresCount = 0;
    let totalScoreSum = 0;

    for (let i = 0; i < scores.length; i++) {

        const item = scores[i];

        // Ignore null values
        if (item === null) {
            continue;
        }

        const numericValue = Number(item);

        if (!Number.isNaN(numericValue)) {
            totalScoreSum += numericValue;
            validScoresCount++;
        }
    }

    if (validScoresCount === 0) {
        return 0;
    }

    return Number((totalScoreSum / validScoresCount).toFixed(1));
}

// ==================== 2. getGrade(average) ====================

function getGrade(average) {

    if (average >= 90) return 'A+';
    if (average >= 80) return 'A';
    if (average >= 70) return 'B';
    if (average >= 60) return 'C';
    if (average >= 50) return 'D';

    return 'F';
}

// ==================== 3. generateReport(students) ====================

function generateReport(studentList) {

    return studentList.map(student => {

        const average = getAverage(student.scores);
        const grade = getGrade(average);
        const status = student.present ? 'present' : 'absent';

        const passed =
            average >= 60 &&
            student.present === true;

        return {
            name: student.name,
            average,
            grade,
            status,
            passed
        };
    });
}

// ==================== 4. getSummary(report) ====================

function getSummary(reportList) {

    const total = reportList.length;

    let passed = 0;
    let failed = 0;

    let topStudentName = '';
    let highestAverageScore = -1;

    let combinedAveragesSum = 0;

    reportList.forEach(record => {

        combinedAveragesSum += record.average;

        if (record.passed) {
            passed++;
        } else {
            failed++;
        }

        if (record.average > highestAverageScore) {
            highestAverageScore = record.average;
            topStudentName = record.name;
        }
    });

    const classAverage =
        total === 0
            ? 0
            : Number((combinedAveragesSum / total).toFixed(1));

    return {
        total,
        passed,
        failed,
        topStudent: topStudentName,
        classAverage
    };
}

// ==================== SYSTEM VERIFICATION RUNNER ====================

const generatedReports = generateReport(students);
const analyticsSummary = getSummary(generatedReports);

console.log("--- Task 3: Generated Report Cards List ---");
console.log(generatedReports);

console.log("\n--- Task 4: Aggregated Metrics Class Summary ---");
console.log(analyticsSummary);

// ==================== IMMUTABILITY VERIFICATION ====================

console.log("\n--- Immutability Verification Check ---");

console.log(
    "Original Dataset Preserved?:",
    students[1].scores.join(', ') === '70,65,80,75'
);

console.log(
    "Original Sara Scores:",
    students[1].scores
);