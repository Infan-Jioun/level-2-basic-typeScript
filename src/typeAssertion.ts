let anything: any;
anything = 435;
(anything as number)
const kgToGMConverter = (input: string | number) => {
    if (typeof input === "number") {
        return input * 1000
    } else if (typeof input === "string") {

        const [value] = input.split(" ")
        console.log(value);
        return `Converted output is ${Number(value)}`
    }
}

console.log(kgToGMConverter(2));
console.log(kgToGMConverter("2 kg"));
type CustomError = {
    messege: string
}
try {

} catch (err) {
   console.log((err as CustomError).messege);
}