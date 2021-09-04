let obj1 = {
    name: "studentA",
    marksObtained: {
        science: 40,
        social: 50,
        english: 60,
        math: 67,
        account: 55,
    },
};

let obj2 = {
    science: {
        passMarks: 32,
        fullMarks: 100,
    },
    social: {
        passMarks: 20,
        fullMarks: 80,
    },
    english: {
        passMarks: 20,
        fullMarks: 80,
    },
    math: {
        passMarks: 32,
        fullMarks: 100,
    },
    account: {
        passMarks: 32,
        fullMarks: 100,
    },
};

function getResult(objA, objB) {
    let failed = 0;
    for (i in obj1["marksObtained"]) {
        objA["marksObtained"][i] < objB[i]["passMarks"] && failed++;
    }
    return failed;
}

function createReportCard(objA, objB) {
    let total = 0;
    let i;
    for (i in objA["marksObtained"]) {
        total += objA["marksObtained"][i];
    }
    const names = Object.values(objA["marksObtained"]);
    let totalSubjects = names.length;
    let percentage = total / totalSubjects;

    let result = getResult(objA, objB);
    if (!result) {
        console.log(`Student A passed obtaining ${percentage}%`);
    } else {
        console.log(
            `Student A failed in obtained ${percentage}% but failed in ${result} subjects. Try again later`
        );
    }
}

createReportCard(obj1, obj2);
