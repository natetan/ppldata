var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PeopleSchema = new Schema({
	name: String,
	age: Number,
	info: String,
});

module.exports = mongoose.model('People', PeopleSchema);