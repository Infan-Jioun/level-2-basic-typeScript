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