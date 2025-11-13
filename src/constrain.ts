const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    }
}
const student1 = {
    id: "1",
    name: "Infan",
    email: "infanjiounrahman20606@gmail.com",
    level_1: false
}
const student2 = {
    id: "2",
    name: "Jioun",
    email: "infanjiounrahman8122003@gmail.com",
    level_1: true
}
const result = addStudentToCourse(student1)
console.log(result)

