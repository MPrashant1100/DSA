 
const gradingStudents = (grades) => {
    const roundedGrade = grades.map((grade) => {
        if (grade >= 38) {
        const multipleOfFive = Math.ceil(grade/5) * 5 ;

        if(multipleOfFive - grade < 3) {
            return multipleOfFive ;
        }
    }
})
return roundedGrade ;

}


const array = [78,20,48,52];
const result = console.log(gradingStudents(array));