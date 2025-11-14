type student = {
    id: number;
    name: string;
    dateOfBirth: string;
    class: string;
}
const addStudentToCourse = <T extends student>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    }
}
const student1 = {
    id: 3,
    name: "Infan",
    email: "infanjiounrahman20606@gmail.com",
    level_1: false,
    dateOfBirth: "23-10-2025",
    class: "10"

}
const student2 = {
    id: "2",
    name: "Jioun",
    email: "infanjiounrahman8122003@gmail.com",
    level_1: true
}

const result = addStudentToCourse(student1)
console.log(result)

