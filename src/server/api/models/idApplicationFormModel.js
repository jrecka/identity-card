'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var idApplicationFormTypesOfData  = new Schema ({
    socialSecurityNumber: {
        type: String
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    familyName: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    birthplace: {
        type: String
    },
    nationality: {
        type: String
    },
    gender: {
        type: String
    },
    mothersName: {
        type: String
    },
    fathersName: {
        type: String
    },
    maidenName: {
        type: String
    },
    street: {
        type: String
    },
    houseNumber: {
        type: String
    },
    flatNumber: {
        type: String
    },
    postalCode: {
        type: String
    },
    city: {
        type: String
    },
    electronicAddress: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    reasonOfApplication: {
        type: String
    },
    message: {
        type: String
    },
    dateOfApplication:  {
        type: String
    },
    placeOfApplication: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
      },
      status: {
        type: [{
          type: String,
          enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    },
});
module.exports = mongoose.model('IdApplicationForm', idApplicationFormTypesOfData);