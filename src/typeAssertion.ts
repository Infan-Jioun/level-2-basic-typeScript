let anything: any;
anything = 435;
const kgToGMConverter = (input: string | number) => {
if(typeof input === "number"){
    return input * 1000
}
}

console.log(kgToGMConverter(2));