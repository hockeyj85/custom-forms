"use strict";

Template.displayDocuments.helpers({
	'documents': function() {
		return App.Documents.find();
	},
});
