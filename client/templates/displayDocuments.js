"use strict";

Template.displayDocuments.helpers({
	'documents': function() {
		return App.Documents.find();
	},

	/* Convert an object into: [{key: keyName, val: value}] */
	'keyVal': function(obj) {
		return _.map(_.pairs(_.omit(obj, ['schemaName', '_id'])), function(e) {
			return {key: e[0], val: e[1]};
		});
	},
});
