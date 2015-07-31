"use strict";

/* To give all the quickforms random ids */
Template.registerHelper('getRandom', function() {
	return Math.random();
});

/* I like this badboy here out of habit for debug */
Template.registerHelper('consoleLog', function() {
	console.log.apply(console, arguments);
});
