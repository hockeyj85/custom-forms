"use strict";

Template.displaySchemas.helpers({
	'schemas': function() {
		return _.map(App.Schemas.find().fetch(), function(e) {
			return _.extend(e, {schema: new SimpleSchema(e.schema)});
		});
	},
});
