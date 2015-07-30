"use strict";

Template.displaySchemas.helpers({
	'schemas': function() {
		return _.map(App.Schemas.find().fetch(), function(e, i) {
			return { schema: new SimpleSchema(e.schema), i: i };
		});
	},
});
