function checkgrade(grade) {
    const value = [4, 3, 2, 1, 0]
    const grades = ['A', 'B', 'C', 'D', 'F']
    let result = 0
    grades.forEach((x, i) => {
        if (x == grade) result = value[i]
    })
    return result
}

const fs = require('fs');
const filePath = 'File/data.json';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        jsonData.map((x) => {

            console.log("Student: " + x.name)
            let sum = 0
            let count = 0
            x.grades.map((i, o) => {

                console.log(`- ${i.course} : ${i.grade}`)
                sum += checkgrade(i.grade)
                count += 1

            })
            sum /= count
            console.log(`GPA: ${sum.toFixed(2)}`)

        })
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});