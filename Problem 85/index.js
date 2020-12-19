function countRectangles(width, height) {
    let totalRectangles = 0;

    for (let w = 1; w <= width; w++) {
        for (let h = 1; h <= height; h++) {
            totalRectangles += (width - (w - 1)) * (height - (h - 1));
        }
    }

    return totalRectangles;
}

function getAllRectanglesDimensions(minWidth, maxWidth, minHeight, maxHeight) {
    let dimensions = [];

    for (let w = minWidth; w <= maxWidth; w++) {
        for (let h = minHeight; h <= maxHeight; h++) {
            dimensions.push({ w, h });
        }
    }

    return dimensions;
};

let allRects = getAllRectanglesDimensions(20, 80, 20, 80);

allRects = allRects.map(rect => {
    return {
        ...rect,
        totalRects: countRectangles(rect.w, rect.h)
    };
});

allRects.sort((a, b) => Math.abs(2000000 - a.totalRects) - Math.abs(2000000 - b.totalRects));

console.log('Closest Rectangle:');
console.log(allRects[0]);
console.log("Area: " + allRects[0].w * allRects[0].h);