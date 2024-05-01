function solution(sizes) {
	const longestSide = Math.max(...sizes.flat());
	const shorterSides = sizes.map(([side1, side2]) => 
		Math.min(side1, side2));
	const longestOfShorterSides = Math.max(...shorterSides);

	return longestSide * longestOfShorterSides;
}