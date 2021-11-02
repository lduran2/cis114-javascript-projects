/**
 * /scripts/map-jnumber.js
 * Performs functions on a J-Number.
 *
 * By        : Leomar Duran <https://github.com/lduran2>
 * When      : 2021-11-01t22:01
 * Where     : Community College of Philadelphia
 * For       : CIS 114/JavaScript I
 * Version   : 1.3.0
 * Canonical : https://github.com/lduran2/cis114-javascript-projects/blob/master/scripts/map-jnumber.js
 *
 * CHANGELOG :
 *     v1.3.0 - 2021-11-01t22:01
 *         getting check-sum from the user
 *
 *     v1.2.0 - 2021-11-01t21:57
 *         implemented the unique ordered digit functions
 *
 *     v1.1.1 - 2021-11-01t21:22
 *         bit mask for unique digits
 *
 *     v1.1 - 2021-11-01t20:32
 *         finding the unique digits in the JNUMBER
 *
 *     v1.0 - 2021-11-01t20:18
 *         finding the sum of digits in the JNUMBER
 */
'use strict';

function main() {
	/* get the user provided value */
	const USER_PROVIDED_VALUE = getUserInput();

	/* perform the operations */
	const RESULT1 = f0(USER_PROVIDED_VALUE);
	const RESULT2 = f0(RESULT1);
	const RESULT3 = f1(RESULT2);
	const RESULT4 = f2(RESULT3);
	const RESULT5 = f3(RESULT4);
	const RESULT6 = f2(RESULT5);
	const RESULT7 = f1(RESULT6);
	const RESULT8 = f3(RESULT7);

	/* print the result */
	alertResult(RESULT8, USER_PROVIDED_VALUE);

	/* finished */
	console.log('Done.');
} /* end function main() */

/**
 * Asks the user for a check-sum and returns it.
 * @return the check-sum from the user
 */
function getUserInput() {
	return Number.parseInt(window.prompt('Please enter the check-sum.'), 10);
} /* end function getUserInput() */

/**
 * Alerts the final result from the function operations and the user
 * provided value.
 * @param finalResult : Number = the final value from the function calls
 * @param userProvidedValue : Number = orignally input by the user
 */
function alertResult(finalResult, userProvidedValue) {
	window.alert(`You provided the number ${userProvidedValue}. Your result is ${finalResult}.`);
} /* end function alertResult(finalResult, userProvidedValue) */

/* ********************************************************************
 * the length of UNIQUE_DIGITS is 4 for the given JNUMBER,
 * so make f[0..3] functions
 */

/**
 * function for first unique digit
 * @param input : Number = the function input
 * @return the mapping from the given input
 */
function f0(input) {
	return f(0, input);
} /* end function f0(input) */

/**
 * function for second unique digit
 * @param input : Number = the function input
 * @return the mapping from the given input
 */
function f1(input) {
	return f(1, input);
} /* end function f1(input) */

/**
 * function for third unique digit
 * @param input : Number = the function input
 * @return the mapping from the given input
 */
function f2(input) {
	return f(2, input);
} /* end function f2(input) */

/**
 * function for fourth unique digit
 * @param input : Number = the function input
 * @return the mapping from the given input
 */
function f3(input) {
	return f(3, input);
} /* end function f3(input) */

/**
 * Function for any index of the unique digits and a given input.
 * @param index : Number = of the unique ordered digits to decide the
 *     function
 * @param input : Number = the function input
 * @return the mapping from the given input
 */
function f(index, input) {
	let result;
	/* if ith unique digit is zero or even (oddness bit is clear) */
	if (!(UNIQUE_DIGITS[index] & 1)) {
		/* add with input and JSUM */
		result = (input + UNIQUE_DIGITS[index] + JSUM);
	} /* end if (!(UNIQUE_DIGITS[index] & 1)) */
	else {
		/* otherwise, multiply with input and JSUM */
		result = (input * UNIQUE_DIGITS[index] * JSUM);
	} /* end (!(UNIQUE_DIGITS[index] & 1)) else */
	return result;
} /* end function f(index, input) */

/* ********************************************************************/

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
} /* end function sumDigitsIn(aString) */

/**
 * Find the unique digits in aString by their original order.
 * @param aString : String = to reduce
 * @return the unique digits in order
 */
function uniqueOrderedDigits(aString) {
	const UNIQUE = [];	/* the digits so far */
	let found = 0;	/* the digits found so far, as a bit mask */
	/* loop through each character in a string */
	for (const CHAR of aString.split('')) {
		const DIGIT = Number.parseInt(CHAR); /* current digit */
		let mask = (1 << DIGIT);	/* mask to the (DIGIT)th bit of found */
		/* if the current digit was not marked found */
		if (!(found & mask)) {
			/* push this digit to the unique array */
			UNIQUE.push(DIGIT);
			/* mark as found */
			found |= mask;
		} /* end if (!(found & mask)) */
	} /* end for (const CHAR of aString.split('')) */
	return UNIQUE;
} /* end function uniqueOrderedDigits(aString) */

/** my J-Number used for testing */
const JNUMBER = '00224250';

/** sum of digits of the J-Number */
const JSUM = sumDigitsIn(JNUMBER);

/** find unique digits */
const UNIQUE_DIGITS = uniqueOrderedDigits(JNUMBER);

main();
