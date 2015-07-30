"use strict";

Template.addSchema.onCreated(function() {
	// The template instance is bound to the argument `this` in onCreated and onRendered.
	var templateInstance = this;
	templateInstance.schemaObject = new ReactiveVar(null);
});

Template.addSchema.helpers({
	'sampleSchema': function() {
		// This is how you get the template instance inside of a helper.
		var templateInstance = Template.instance();

		// Don't bother to create a schema until we have an object to create it with.
		if (templateInstance.schemaObject.get() === null) return;
		else return new SimpleSchema(templateInstance.schemaObject.get());
	},
})

Template.addSchema.events({
	// In events, the template instance and dom event are passed in as arguments.
	'click .btn-add-field': function(event, template) {
		var schemaObj = template.schemaObject;
		var nameField = template.$('.input-schema-name');
		var name = nameField.val();
		var type = function(typeString) {
			switch(typeString) {
				case 'bool': return Boolean;
				case 'text': return String;
			};
		}(template.$('.input-schema-type').val());

		// Make a schema object
		var schemaField = {};
		schemaField[name] = {
			type: type,
			label: name,
		};

		schemaObj.set(_.extend((schemaObj.get() || {}), schemaField));
		nameField.val('');
	},

	'click .btn-clear-schema': function(event, template) {
		template.schemaObject.set(null);
	},

	'click .btn-add-schema': function (event, template) {
		App.Schemas.insert({ schema: template.schemaObject.get() });
		template.schemaObject.set(null);
	},

});
