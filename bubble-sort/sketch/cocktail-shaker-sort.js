var values = [];
var beginIdx = endIdx = newBeginIndex = newEndIndex = 0;

function setup() {
	createCanvas(700, 300);
	values = new Array(width);
	for (let i = 0; i < values.length; i++) {
		values[i] = parseFloat(random(height).toFixed(2));
		// values[i] = noise(i / 100.2) * height;
	}
	console.log(values);

	beginIdx = 0;
	endIdx = values.length - 1;
}

var i = 0;
var j = 0;

let swapped = false;
let toggle = -1;

function draw() {
	console.log('as');
	background(0);

	if (beginIdx < endIdx) {
		newBeginIndex = endIdx;
		newEndIndex = beginIdx;

		for (let ii = beginIdx; ii < endIdx; ii++) {
			if (values[ii] > values[ii + 1]) {
				swap(values, ii, (ii + 1));
				newEndIndex = ii;
			}
		}

		endIdx = newEndIndex - 1;

		for (let ii = endIdx - 1; ii >= beginIdx; ii--) {
			if (values[ii] > values[ii + 1]) {
				swap(values, ii, (ii + 1));
				newBeginIndex = ii;
			}
		}

		beginIdx = newBeginIndex + 1;

	} else {
		noLoop();
		console.log("done");
	}


	for (let i = 0; i < values.length; i++) {
		stroke(255);
		line(i, height, i, height - values[i]);
	}

}



function swap(a, i, j) {
	let temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}