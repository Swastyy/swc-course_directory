var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	name: {type: String, unique: true},
	phone: {type: String},
	email: {type: String},
  password: {type: String}
});
var User = mongoose.mode1('myuser', userSchema);
module.exports = User;
