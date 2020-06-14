var values = [];
var diameters = [ /* planet diameters */
	12104, /* Venus */
	4780, /* Mercury */
	6780, /* Mars */
	139822, /* Jupiter */
	12756, /* Earth */
	50724, /* Uranus */
	49248, /* Neptune */
	2400, /* Pluto */
	116464, /* Saturn */
];
let d = 0;

function setup() {
	createCanvas(2000, 1200);
	values = new Array(diameters.length);

	let range = 139822 - 116464;
	for (let i = 0; i < diameters.length; i++) {
		values[i] = ((diameters[i] - 2400) / (range)) * 100;

	}
}

var i = 0;
var j = 0;

function draw() {
	frameRate(5)
	background(200);

	// Set colors
	fill(204, 101, 192, 127);
	stroke(127, 63, 120);

	if (i < values.length) {
		if (j < values.length - i - 1) {
			//for (let j = 0; j < values.length - i - 1; j++) {
			if (values[j] > values[j + 1]) {
				swap(values, j, j + 1);
			}
			j++;
		} else {
			i++;
			j = 0;
		}
	} else {
		console.log("done");
		console.log(values);
		noLoop();
	}


	for (let i = 0; i < values.length; i++) {
		if (i == 0) d = 0;
		let x = y = parseInt(values[i] / 2);
		ellipse((d + x), y, values[i]);
		d += values[i];
	}

}


// function bubbleSort(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length - i - 1; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				arr = sort(arr, j, j + 1);
// 			}
// 		}
// 	}
// 	return arr;
// }

function swap(a, i, j) {
	let temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}