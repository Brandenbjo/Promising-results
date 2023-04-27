




// slowMath.add(6, 2)
//     .then((result1) => {
//         console.log(result1)
//         return slowMath.multiply(result1, 2)

//     }).then((result2) => {
//         console.log(result2)
//         return slowMath.divide(result2, 4)

//     }).then((result3) => {
//         console.log(result3)
//         return slowMath.subtract(result3, 3)

//     }).then((result4) => {
//         console.log(result4)
//         return slowMath.add(result4, 98)

//     }).then((result5) => {
//         console.log(result5)
//         return slowMath.remainder(result5, 2)

//     }).then((result6) => {
//         console.log(result6)
//         return slowMath.multiply(result6, 50)

//     }).then((result7) => {
//         console.log(result7)
//         return slowMath.remainder(result7, 40)

//     }).then((result8) => {
//         console.log(result8)
//         return slowMath.add(result8, 32)

//     }).then((result9) => {
//         console.log(`The final result is ${result9}`)
//     }).catch((error) => {
//         console.log("WHAT HAPPENED???")
//     }
//     )


let doMath = async () => {
    try {
        let result1 = await slowMath.add(1, 1);
        console.log(result1);

        result2 = await slowMath.multiply(result1, 2);
        console.log(result2);

        result3 = await slowMath.divide(result2, 4);
        console.log(result3);

        result4 = await slowMath.subtract(result3, 3);
        console.log(result4);

        result5 = await slowMath.add(result4, 98);
        console.log(result5);

        result6 = await slowMath.remainder(result5, 2);
        console.log(result6);

        result7 = await slowMath.multiply(result6, 50);
        console.log(result7);

        result8 = await slowMath.remainder(result7, 40);
        console.log(result8);

        result9 = await slowMath.add(result8, 32);
        console.log(`The final result is ${result9}`);
    } catch (error) {
        console.log("WHAT HAPPENED???")
    }
}
doMath()






