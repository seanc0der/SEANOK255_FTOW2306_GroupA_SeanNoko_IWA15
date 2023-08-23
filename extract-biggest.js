const data = {
	lists: [
		["first", [15, 11, 13, 7, 5]],
		["second", [2, 6, 8, 4, 14, 12, 10]],
		["third", [9, 3, 1]],
	],
};

// Only edit below

const {
	lists: [[, arr1], [, arr2], [, arr3]],
} = data;

const result = [];

const extractBiggest = () => {
	const arr1Last = arr1.length === 0 ? null : arr1[arr1.length - 1];
	const arr2Last = arr2.length === 0 ? null : arr2[arr2.length - 1];
	const arr3Last = arr3.length === 0 ? null : arr3[arr3.length - 1];

	if (arr1Last > arr2Last && arr1Last > arr3Last) return arr1.pop();
	if (arr2Last > arr1Last && arr2Last > arr3Last) return arr2.pop();
	if (arr3Last > arr1Last && arr3Last > arr2Last) return arr3.pop();
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
