const createArrayString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value]
const createArrayWithObj = (value: {
    id: number,
    name: string
}) => {
    return [value]
}

const arrString = createArrayString("apple");
const arrNumber = createArrayWithNumber(234);
const arrObj = createArrayWithObj({
    id: 2,
    name: "infan jioun "
}) 