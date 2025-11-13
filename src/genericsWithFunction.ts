// const createArrayString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value]
// const createArrayWithObj = (value: {
//     id: number,
//     name: string
// }) => {
//     return [value]
// }
// generic dynamic funtion 
const createArrayWithGeneric = <T>(value: T) => {
    return [value]
}

const arrString = createArrayWithGeneric("apple");
const arrNumber = createArrayWithGeneric(234);
const arrObj = createArrayWithGeneric({
    id: 2,
    name: "infan jioun "
})
console.log(arrString, arrNumber, arrObj);

// tuple 
const createArrayWithTuple = (param1: string, param2: string) => [
    param1, param2
]
const createArrayTupleGeneric = <X, Y>(param1: X, param2: Y) => [
    param1, param2
]
const res1 = createArrayTupleGeneric("Infan", false);
const res2 = createArrayTupleGeneric(334, { name: "Infan Jioun Rahman" });

const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: "Next Developent ",
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
console.log(result);