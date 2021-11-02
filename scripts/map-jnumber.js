/**
 * /scripts/map-jnumber.js
 * Performs functions on a J-Number.
 *
 * By        : Leomar Duran <https://github.com/lduran2>
 * When      : 2021-11-01t20:32
 * Where     : Community College of Philadelphia
 * For       : CIS 114/JavaScript I
 * Version   : 1.1
 * Canonical : https://github.com/lduran2/cis114-javascript-projects/blob/master/scripts/map-jnumber.js
 *
 * CHANGELOG :
 *     v1.1 - 2021-11-01t20:32
 *         finding the unique digits in the JNUMBER
 *
 *     v1.0 - 2021-11-01t20:18
 *         finding the sum of digits in the JNUMBER
 */
'use strict';

function main() {
	const JNUMBER = '00224250';	/* my J-Number used for testing */
	const JSUM = sumDigitsIn(JNUMBER);	/* sum of digits of the J-Number */
	const UNIQUE_DIGITS = uniqueOrderedDigits(JNUMBER);	/* find unique digits */

	/* print the JSUM and unique digits */
	console.log(JSUM);
	console.log(UNIQUE_DIGITS);

	/* finished */
	console.log('Done.');
} /* function main() */

/**
 * Reduces a number parsed from a string by adding all digits.
 * @param aString : String = to reduce
 * @return the sum of the digits
 */
function sumDigitsIn(aString) {
	let sum = 0;	/* the sum of digits so far */
	/* loop through each character, split with delimiter '' */
	for (const CHAR of aString.split('')) {
		/* parse the current character and add it to the  sum */
		sum += Number.parseInt(CHAR);
	} /* for (const CHAR of aString.split('')) */
	return sum;
} /* function sumDigitsIn(aString) */

function uniqueOrderedDigits(aString) {
	const UNIQUE = [];	/* the digits so far */
	const FOUND = [];	/* the digits found so far */
	/* loop through each character in a string */
	for (const CHAR of aString.split('')) {
		/* get the current digit */
		const DIGIT = Number.parseInt(CHAR);
		/* if the current digit was not marked found */
		/* if the digit was not found so far,
		 * this should be undefined, which counts as falsy */
		if (!FOUND[DIGIT]) {
			/* push this digit to the unique array */
			UNIQUE.push(DIGIT);
			/* mark as found */
			FOUND[DIGIT] = true;
		} /* if (!FOUND[DIGIT]) */
	} /* for (const CHAR of aString.split('')) */
	return UNIQUE;
} /* function uniqueOrderedDigits(aString) */

main();
