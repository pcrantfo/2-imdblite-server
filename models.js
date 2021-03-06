const mongoose = require('mongoose');

let movieSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    genre: {
        name: String,
        description: String
    },
    director: {
        name: String,
        bio: String,
        birthDate: Date
    },
    imageURL: String,
    featured: Boolean
});

const bcrypt = require('bcrypt');

let userSchema = mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    birthDate: Date,
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'movie' }]
});

userSchema.statics.hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

let movie = mongoose.model('movie', movieSchema);
let user = mongoose.model('user', userSchema);

module.exports.movie = movie;
module.exports.user = user;