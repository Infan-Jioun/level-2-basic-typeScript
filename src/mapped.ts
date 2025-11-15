const arrayOfNum: number[] = [1, 4, 6];
const arrayofString: string[] = ["1", "4", "6"]
const arrayofStringUsignMap: string[] = arrayOfNum.map((num) => num.toString())
console.log(arrayofStringUsignMap);
type AreaNum = {
    height: number,
    width: number
}
type AreaString = {
    height: string,
    widht: string
}

type Area<T> = {
    [key in keyof T]: T[key];
}
const area1: Area<{ height: string; width: boolean }> = {
    height: "50",
    width: false
}
console.log(area1);