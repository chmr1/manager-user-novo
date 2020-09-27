'use strict';

// import passwordGenerator from 'password-generator';
// import Queue from '../lib/Queue';

const UserRepository = require('../repositories/userRepository');

exports.get = (req, res, next) => {
    UserRepository.getAll()
        .then((user) => {
            res.status(200).send(user);
        }).catch(err => res.status(500).send(err))
};

exports.getById = (req, res, next) => {

    UserRepository.getById(req.params.id)
        .then((user) => {
            res.status(200).send(user);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res, next) => {
    const p = req.body;

    UserRepository.create(p)
        .then((user) => {
            res.status(200).send(user);
        }).catch(err => res.status(500).send(err))
};

exports.put = (req, res, next) => {
    const p = req.body;

    UserRepository.update(req.params.id, p)
        .then((user) => {
            res.status(201).send(user);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res, next) => {
    UserRepository.delete(req.params.id)
        .then((user) => {
            res.status(200).send('delete succeeded!');
        }).catch(err => console.error.bind(console, `Error ${err}`))
};



// export default {
//     async store(req, res) {
//         const {name, email} = req.body;

//         const user = {
//             name,
//             email,
//             password: passwordGenerator(15, false)
//         };

//         await Queue.add('RegistrationMail', { user });

//         return res.json(user);
//     }
// }