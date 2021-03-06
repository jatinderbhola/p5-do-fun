var values = [];
var swapped = false;
var start = end = 0;

function setup() {
	createCanvas(700, 300);
	values = new Array(width);
	for (let i = 0; i < values.length; i++) {
		values[i] = parseFloat(random(height).toFixed(2));
		// values[i] = noise(i / 100.2) * height;
	}
	console.log(values);
	swapped = true;
	start = 0;
	end = values.length;
}

function draw() {
	console.log('as');
	background(0);

	if (swapped) {
		swapped = false;

		for (let ii = start; ii < end - 1; ii++) {
			if (values[ii] > values[ii + 1]) {
				swap(values, ii, (ii + 1));
				swapped = true;
			}
		}

		if (!swapped) noLoop();
		end = end - 1;

		for (let ii = end - 1; ii >= start; ii--) {
			if (values[ii] > values[ii + 1]) {
				swap(values, ii, (ii + 1));
				swapped = true;
			}
		}

		start = start + 1;

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