/**
 * /scripts/move-christmas-paragraphs.js
 * Performs various tasks on the "A Christmas Carol" text.
 *
 * By        : Leomar Duran <https://github.com/lduran2>
 * When      : 2021-11-04t22:29
 * Where     : Community College of Philadelphia
 * For       : CIS 114/JavaScript I
 * Version   : 1.0.2
 * Canonical : https://github.com/lduran2/cis114-javascript-projects/blob/master/scripts/map-jnumber.js
 *
 * CHANGELOG :
 *     v1.0.3 - 2021-11-04t22:36
 *         alert before task
 *
 *     v1.0.2 - 2021-11-04t22:29
 *         moved task to its own function
 *
 *     v1.0.1 - 2021-11-04t22:24
 *         add a new paragraph between first 2
 *
 *     v1.0.0 - 2021-11-04t21:12
 *         gets the paragraphs (>= 2)
 */
'use strict';

function main() {
	const N_PARA_EXPECTED = 2;	/* #(paragraphs expected) */

	/* get and check the content division */
	const CONTENT = document.querySelector('#content');
	if (!CONTENT) return;

	/* get and check the paragraphs */
	const PARAGRAPHS = CONTENT.children;
	if (!PARAGRAPHS || PARAGRAPHS.length < N_PARA_EXPECTED) return;

	/* print the paragraphs to console */
	console.log(PARAGRAPHS);

	/* wait for the user */
	window.alert('The original text. Continue . . .');

	/* add a new paragraph between first 2 */
	insertParagraph(PARAGRAPHS);
} /* end function main() */

/**
 * Inserts a new paragraph before paragraph #2.
 * @param paragraph : HTMLCollection = collection from which to pick
 *     paragraph #2
 */
function insertParagraph(paragraphs) {
	const NEW_P1_TEXT = ('To his great astonishment, the heavy bell went '
		+ 'on from six to seven, and from seven to eight, and regularly up '
		+ 'to twelve; then stopped. Twelve! It was past two when he went '
		+ 'to bed. The clock was wrong. An icicle must have got into the '
		+ 'works. Twelve!');	/* text for new paragraph #2 */

	/* create the paragraph */
	const NEW_P1 = createTextElement('p', NEW_P1_TEXT);

	/* insert it between first 2 paragraphs */
	paragraphs[1].parentNode.insertBefore(NEW_P1, paragraphs[1]);
}

/**
 * Create an element with given textContent.
 * @param tagName : String = name of the element tag
 * @param textContent : String = text value to append to the element
 * @return the element created
 */
function createTextElement(tagName, textContent) {
	const ELEMENT = document.createElement(tagName);	/* the element in DOM */
	const TEXT_NODE = document.createTextNode(textContent);	/* text node to place in element */

	/* set the text node's value */
	TEXT_NODE.nodeValue = textContent;
	/* append to the element */
	ELEMENT.appendChild(TEXT_NODE);

	return ELEMENT;
} /* end function createTextElement(tagName, textContent) */

main();
