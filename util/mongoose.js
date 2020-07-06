const mongoose = require('mongoose');
const { DBCONNECTION } = require('../config');

module.exports = {
    init: () => {
        const mongoOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            autoIndex: false, // Don't build indexes
            poolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            family: 4 // Use IPv4, skip trying IPv6
        };

        mongoose.connect(DBCONNECTION, mongoOptions);

        mongoose.connection.on('connected', () => console.log('Mongoose est connecté !'));
        mongoose.connection.on('disconnected', () => console.log('Mongoose est déconnecté !'));
    }
}