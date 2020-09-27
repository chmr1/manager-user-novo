'use strict';

import passwordGenerator from 'password-generator';

var User = require('../config/db');

module.exports = new class UserRepository {

    getAll() {
        return User.find();
    }

    getById(id) {
        return User.findById(id);
    }

    create(user) {

        const createdUser = {
            name: user.name,
            email: user.email,
            password: passwordGenerator(15, false)
        }

        return User.create(createdUser);
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