"use strict";

Template.registerHelper('getRandom', function() {
	return Math.random();
});

Template.registerHelper('consoleLog', function() {
	console.log.apply(console, arguments);
});

Template.registerHelper('stringify', function(arg) {
	return JSON.stringify(arg);
});
