let weights = [];
for (let i = 0; i < 5; i++) {
    weights.push(Math.random())
}

function whatPick(arr, weights) {
   let index = weights.indexOf(Math.max(...weights))
   return arr[index]
}

function train(trainingData, expResult, weights) {

    const LR = 0.1, EPOCH = 5;
    for (let i = 0; i < EPOCH; i++) {
        // console.log(weights)
        for (let j = 0; j < trainingData.length; j++) {
            let tempRes = whatPick(trainingData[j],weights)
            let error = expResult[j] - tempRes
            for (let k = 0; k < trainingData[j].length; k++) {
                weights[k] += LR * error * trainingData[j][k];
            }
        }
    }
}

function makeData(len){
    let arr = []
    for (let i = 0; i < len; i++) {
        arr[i] = [...new Array(5)]
        .map(() => Math.floor(Math.random() * 10))
    }
    return arr
}
let trainingData = makeData(15);

function makeExp(arr){
return trainingData.map((el) => el[3])
}

let expResult = makeExp(15);

console.log(weights)

train(trainingData, expResult, weights)

console.log(weights)


const newArr = [48, 1, 0,67,4];

console.log((whatPick(newArr,weights)))