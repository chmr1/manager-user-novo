var mongoose = require('mongoose');

mongoose.connect(process.env.URL_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;