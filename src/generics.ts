type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ["infan", "Jioun", "Rahman"];
const rollNumber: GenericArray<number> = [4, 5, 6];
const isEligibleList: Array<boolean> = [true, false, true];
console.log(friends);
console.log(rollNumber);
console.log(isEligibleList);
const sqrFunc = (value: number) => {
    return value * value
}
console.log(sqrFunc(4));