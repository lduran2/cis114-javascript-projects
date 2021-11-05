/**
 * /scripts/move-christmas-paragraphs.js
 * Performs various tasks on the "A Christmas Carol" text.
 *
 * By        : Leomar Duran <https://github.com/lduran2>
 * When      : 2021-11-05t01:17
 * Where     : Community College of Philadelphia
 * For       : CIS 114/JavaScript I
 * Version   : 1.4.0
 * Canonical : https://github.com/lduran2/cis114-javascript-projects/blob/master/scripts/map-jnumber.js
 *
 * CHANGELOG :
 *     v1.4.0 - 2021-11-05t01:17
 *         adding a class to the content division
 *
 *     v1.3.0 - 2021-11-05t00:50
 *         appending a new paragraph to the end of the content
 *
 *     v1.2.0 - 2021-11-05t00:04
 *         switched delays to alerts
 *         implemented updating a paragraph
 *
 *     v1.1.1 - 2021-11-04t23:12
 *         added delay to task #2
 *
 *     v1.1.0 - 2021-11-04t23:06
 *         passing the elements to functions,
 *             rather than their collections
 *         implemented removing the element
 *
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
	const N_PARA_EXPECTED = 3;	/* #(paragraphs expected) */
	const bookClass = 'christmas-book';	/* the class to add to CONTENT */

	/* get and check the content division */
	const CONTENT = document.querySelector('#content');
	if (!CONTENT) return;

	/* note: continue to use CONTENT.children directly
	 * because if it's stored in a variable, the variable won't update
	 */

	/* get and check the paragraphs */
	if (!CONTENT.children || (CONTENT.children.length < N_PARA_EXPECTED)) {
		return;
	} /* end if (!CONTENT.children
		|| (CONTENT.children.length < N_PARA_EXPECTED))
	   */

	/* print the content and paragraphs to console */
	console.log(CONTENT);
	console.log(CONTENT.children);

	/* add a new paragraph between first 2 */
	window.alert('Adding a new paragraph between the first 2 paragraphs. Continue . . .');
	insertParagraph(CONTENT.children[1]);

	/* remove the first paragraph */
	window.alert('Removing first paragraph. Continue . . .');
	/* note: CONTENT.firstChild may be a text node,
	 * whereas CONTENT.children only contains element nodes */
	removeParagraph(CONTENT.children[0]);

	/* update the text of the third paragraph */
	window.alert('Updating third paragraph. Continue . . .');
	updateParagraph(CONTENT.children[2]);

	/* append a new paragraph to the end of content */
	window.alert('Appending a new paragraph. Continue . . .');
	appendParagraphTo(CONTENT);

	/* add a class to the content division */
	window.alert('Adding a class to the content division. Continue . . .');
	CONTENT.classList.add(bookClass);

	console.log('Done.');
} /* end function main() */

/**
 * Inserts a new paragraph before the given paragraph (Task #1).
 * @param paragraph : HTMLParagraphElement = to insert before
 * @return the new paragraph inserted
 */
function insertParagraph(paragraph) {
	const NEW_P_TEXT = ('To his great astonishment, the heavy bell went '
		+ 'on from six to seven, and from seven to eight, and regularly up '
		+ 'to twelve; then stopped. Twelve! It was past two when he went '
		+ 'to bed. The clock was wrong. An icicle must have got into the '
		+ 'works. Twelve!');	/* text for new paragraph */

	/* create the new paragraph */
	const NEW_P = createTextElement('p', NEW_P_TEXT);

	/* insert it before the given paragraph */
	return paragraph.parentNode.insertBefore(NEW_P, paragraph);
} /* end function insertParagraph(paragraphs) */

/**
 * Removes the given paragraph (Task #2).
 * @param paragraph : HTMLParagraphElement = to remove
 * @return the paragraph removed
 */
function removeParagraph(paragraph) {
	return paragraph.parentNode.removeChild(paragraph);
} /* end function removeParagraph(paragraph) */

/**
 * Changes the text of the given paragraph (Task #3).
 * @param paragraph : HTMLParagraphElement = whose text content to change
 */
function updateParagraph(paragraph) {
	const NEW_TEXT = ('Scrooge went to bed again, and thought, and '
		+ 'thought, and thought it over and over, and could make nothing '
		+ 'of it. The more he thought, the more perplexed he was; and, the '
		+ 'more he endeavoured not to think, the more he thought.');
		/* the new text */
	/* set the paragraph's text */
	paragraph.textContent = NEW_TEXT;
} /* end function updateParagraph(paragraph) */

/**
 * Appends a new paragraph as the last element of the given division.
 * @param div : HTMLDivElement = to which to append
 */
function appendParagraphTo(div) {
	const NEW_P_TEXT = ('Marley’s Ghost bothered him exceedingly. Every '
		+ 'time he resolved within himself, after mature enquiry, that it '
		+ 'was all a dream, his mind flew back again, like a strong spring '
		+ 'released, to its first position, and presented the same problem '
		+ 'to be worked all through, ');
		/* the first of the new paragraph text */
	const NEW_Q_TEXT = 'Was it a dream or not?'; /* the quote text */

	const NEW_P = createTextElement('p', NEW_P_TEXT);	/* new paragraph */
	const NEW_Q = createTextElement('q', NEW_Q_TEXT);	/* new quotation */

	/* append the quotation to the paragraph */
	NEW_P.append(NEW_Q);
	/* append the paragraph to division */
	div.append(NEW_P);
} /* end function appendParagraphTo(div) */

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
