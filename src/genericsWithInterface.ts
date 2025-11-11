interface Developer<T> {
    name: string;
    email: string;
    device: {
        brand: string;
        model: string;
        ram: number;
        ssd: number;

    }
    smartWatch: T;
}
const developerInfo: Developer<{
    display: "Amoled" | "Oled" | "LCD",
    CallPad: boolean,
    sim: boolean
}> = {
    name: "Infan Jioun Rahman",
    email: "infanjiounrahman20606@gmail.com",
    device: {
        brand: "Lenevo",
        model: "Lenovo Thinkpad x1 yoga",
        ram: 16,
        ssd: 256
    },
    smartWatch: {
        display: "Amoled",
        CallPad: true,
        sim: true
    }
}
console.log(developerInfo);