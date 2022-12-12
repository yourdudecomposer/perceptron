let _weights = 3
let w = [];

function activate(a) {
    return a > 0 ? 1 : 0;
}

function RightProp(inputs) {
    let res = 0;
    for (let i = 0; i < 3; i++)
        res += w[i] * inputs[i];
    return res;
}

function train(data, exp) {

    const LR = 0.1, EPOCH = 50;
    let error;

    for (let i = 0; i < EPOCH; i++) {

        for (let j = 0; j < 4; j++) {

            error = exp[j] - activate(RightProp(data[j]));

            for (let k = 0; k < _weights; k++) {
                w[k] += LR * error * data[j][k];
            }
        }
    }
}

let trainingData = [[0, 0, 1], [0, 1, 1], [1, 0, 1], [0, 1, 0]];
let expResults = [0, 0, 1]

for (let i = 0; i < 3; i++) {
    w.push(Math.random())
}

train(trainingData, expResults)
for (i = 0; i < 3; i++) {
    w[i] = (w[i] > 0) ? w[i] : 0;
}
const newArr = [1, 1, 0];

console.log(activate(RightProp(newArr)))
console.log(w)