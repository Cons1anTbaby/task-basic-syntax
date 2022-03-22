export function romanToInteger(str) {
    let result = 0;
    let mod = 1;
    const valueDict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < str.length; i++) {
        if (valueDict[str[i]] < valueDict[str[i + 1]]) {
            mod = -1;
        }
        result += valueDict[str[i]] * mod;
        mod = 1;
    }
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    return result;
}
