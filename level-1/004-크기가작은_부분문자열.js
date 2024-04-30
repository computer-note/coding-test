const result = solution("1230993", "777");
console.log(result);

function solution(t, p) {
	const subarraysOfSizeP = subarray([...t], p.length);
	const numbersOfLenP = subarraysOfSizeP.map(subarray =>
		Number(subarray.join(''))
	);

	const compareNumber = Number(p);
	const lessThanEqualCount = numbersOfLenP.reduce((lteCnt, number) => {
		return number <= compareNumber ? lteCnt + 1 : lteCnt;
	}, 0);

	return lessThanEqualCount;

	function subarray(array, size) {
		const subarrays = [];
		const lastSubArrayIdx = array.length - size;
		for (let i = 0; i <= lastSubArrayIdx; ++i) {
			subarrays.push([]);
			for (let j = 0; j < size; ++j) {
				subarrays[i].push(array[i + j]);
			}
		}
		return subarrays;
	}
}

/*****************
  다른 분들의 풀이
******************/
function otherSolution(t, p) {
	//substring 메서드를 활용
	//one-pass에 표현

	let lessThanEqualCount = 0;
	const compareNumber = Number(p);
	const indexOfLastSubStr = t.length - p.length;
	for (let i = 0; i <= indexOfLastSubStr; ++i) {
		const substrNumber = Number(t.substring(i, i+p.length));
		if(substrNumber <= compareNumber) {
			++lessThanEqualCount;
		}
	}
	return lessThanEqualCount;
}