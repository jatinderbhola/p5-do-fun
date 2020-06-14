var values = [],
	isSort = false,
	gap = 0,
	strink = 1.3;

function setup() {
	createCanvas(700, 300);
	values = new Array(width);
	for (let i = 0; i < values.length; i++) {
		values[i] = parseFloat(random(height).toFixed(2));
		// values[i] = noise(i / 100.2) * height;
	}

	gap = values.length;
}

function draw() {
	console.log('as');
	background(0);

	frameRate(1);
	if (gap != 1 || isSort == true) {

		gap = parseInt(gap / strink);
		gap < 1 && (gap = 1);
		isSort = false;


		for (let i = 0; i < values.length - gap; i++) {
			if (values[i] > values[i + gap]) {
				swap(values, i, (i + gap));
				isSort = true;
			}
		}

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