'use strict';
var User = require('../config/db');

module.exports = new class UserRepository {

    getAll() {
        return User.find();
    }

    getById(id) {
        return User.findById(id);
    }

    create(user) {
        return User.create(user);
    }

    update(id, user) {

        const updatedUser = {
            name: user.name,
            email: user.email
        }

        return User.findOneAndUpdate(id, updatedUser, { new: true });
    }

    delete(id) {
        return User.findByIdAndRemove(id);
    }

}