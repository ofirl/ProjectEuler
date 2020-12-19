function calcShortestPath(a, b, c) {
    let cuboid = [a, b, c];
    cuboid.sort((a, b) => b - a);

    return Math.sqrt(Math.pow(cuboid[0], 2) + Math.pow(cuboid[1], 2) + Math.pow(cuboid[2], 2) + 2 * cuboid[1] * cuboid[2]);
}

function* getDimensions(min, max) {
    for (let a = 1; a <= max; a++) {
        for (let b = a; b <= max; b++) {
            for (let c = Math.max(b, min); c <= max; c++) {
                if (a > min || b > min || c > min)
                    yield { a, b, c };
            }
        }
    }
}

function isInt(num) {
    return Math.round(num) === num;
}

let M = 0;
let prevTotal = 0;


let cuboids = [];
while (prevTotal < 1000000) {
    M++;

    console.log(M);

    let dimensions = getDimensions(M - 1, M)
    currentDim = dimensions.next().value;

    while (currentDim != null) {
        let shortestPath = calcShortestPath(currentDim.a, currentDim.b, currentDim.c);
        if (isInt(shortestPath))
            prevTotal++;

        currentDim = dimensions.next().value;
    }

    console.log(prevTotal);
}

console.log(prevTotal);
console.log(M);