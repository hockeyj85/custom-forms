/**
 * globals.js
 * this is the only file that should not use strict.
 */

// A single global for our app, to minimise namespace clashes.
App = {};
// Client side only anon collections
App.Schemas = new Mongo.Collection(null);
App.Documents = new Mongo.Collection(null);
