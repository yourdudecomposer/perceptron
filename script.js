 let weights = [];
 for (let i = 0; i < 3; i++) {
    weights.push(Math.random())
}

function activate(a) {
    return a > 0 ? 1 : 0;
}

function RightProp(inputs) {
    let res = 0;
    for (let i = 0; i < 3; i++)
        res += weights[i] * inputs[i];
    return res;
}

function train(data, exp) {

    const LR = 0.1, EPOCH = 50;
    let error;

    for (let i = 0; i < EPOCH; i++) {

        for (let j = 0; j < 4; j++) {

            error = exp[j] - activate(RightProp(data[j]));

            for (let k = 0; k < weights.length; k++) {
                weights[k] += LR * error * data[j][k];
            }
        }
    }
}

let trainingData = [[0, 0, 1], [0, 1, 1], [1, 0, 1], [0, 1, 0]];
let expResults = [0, 0, 1, 0]


train(trainingData, expResults)

for (i = 0; i < 3; i++) {
    weights[i] = (weights[i] > 0) ? weights[i] : 0;
}

const newArr = [0, 1, 0];

console.log(activate(RightProp(newArr)))