/**
 * /scripts/map-jnumber.js
 * Performs functions on a J-Number.
 *
 * By        : Leomar Duran <https://github.com/lduran2>
 * When      : 2021-11-01t20:18
 * Where     : Community College of Philadelphia
 * For       : CIS 114/JavaScript I
 * Version   : 1.0
 * Canonical : https://github.com/lduran2/cis114-javascript-projects/blob/master/scripts/map-jnumber.js
 *
 * CHANGELOG :
 *     v1.0 - 2021-11-01t20:18
 *         finding the sum of digits in the JNUMBER
 */
'use strict';

function main() {
	const JNUMBER = '00224250';	/* my J-Number used for testing */
	const JSUM = sumDigitsIn(JNUMBER);	/* sum of digits of the J-Number */

	/* print the JSUM */
	console.log(JSUM);

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

main();