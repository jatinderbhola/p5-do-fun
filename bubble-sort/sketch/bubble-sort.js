var values = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	values = new Array(width);
	for (let i = 0; i < values.length; i++) {
		// values[i] = parseFloat(random(height).toFixed(2));
		values[i] = noise(i / 10.2) * height;
	}
	console.log(values);
}

var i = 0;
var j = 0;
var pick = 0;

function draw() {
	background(222);

	if (i < values.length) {
		// if (j < values.length - i - 1) {
		for (let j = 0; j < values.length - i - 1; j++) {
			if (values[j] > values[j + 1]) {
				swap(values, j, j + 1);
			}
		}
	} else {
		console.log("done");
		console.log(values);
		noLoop();
	}
	for (let i = 0; i < values.length; i++) {
		stroke(0);
		line(i, height, i, height - values[i]);
	}
}



function swap(a, i, j) {
	let temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}