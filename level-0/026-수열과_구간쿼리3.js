function mySolution(arr, queries) {
	queries.forEach(([i, j]) => {
		const tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	});

	return arr;
}

/* pseudo-code
  queries를 순회하며 swap을 arr에 적용한다
  수정된 arr을 반환한다
*/

/*****************
  다른 분들의 풀이
******************/
function otherSolution(arr, queries) {
	//배열디스트럭처링 응용
	queries.forEach(([i, j]) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	})

	return arr;
}

function otherSolution2(arr, queries) {
	//원본 배열을 수정하지 않는 방식
	return queries.reduce((shuffle, [i, j]) => {
		[shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
		return shuffle;
	}, [...arr]);
}