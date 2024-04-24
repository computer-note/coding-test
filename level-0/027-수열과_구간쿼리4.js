function mySolution(arr, queries) {
	for (const [s, e, k] of queries) {
		for (let i = s; i <= e; ++i) {
			//note: k가 0인 경우 i % k => NaN
			//      i가 0인 경우 i % k => 0
			if (i % k === 0) {
				++arr[i];
			}
		}
	}

	return arr;
}


/* pseudo-code
  절차

*/