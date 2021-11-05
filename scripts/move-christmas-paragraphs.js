/**
 * /scripts/move-christmas-paragraphs.js
 * Performs various tasks on the "A Christmas Carol" text.
 *
 * By        : Leomar Duran <https://github.com/lduran2>
 * When      : 2021-11-04t21:12
 * Where     : Community College of Philadelphia
 * For       : CIS 114/JavaScript I
 * Version   : 1.0.0
 * Canonical : https://github.com/lduran2/cis114-javascript-projects/blob/master/scripts/map-jnumber.js
 *
 * CHANGELOG :
 *     v1.0.0 - 2021-11-04t21:12
 *         gets the paragraphs (>= 2)
 */
'use strict';

function main() {
	/* get and check the content division */
	const CONTENT = document.querySelector('#content');
	if (!CONTENT) return;

	/* get and check the paragraphs (we need >= 2) */
	const PARAGRAPHS = CONTENT.querySelectorAll('p');
	if (!PARAGRAPHS || PARAGRAPHS.length < 2) return;

	/* print the paragraphs to console */
	console.log(PARAGRAPHS);
} /* end function main() */

main();
