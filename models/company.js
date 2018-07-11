const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    companyname: {type: String},
    address: {type: String, default: ''},
    city: {type: String, default: ''},
    sector: {type: String, default: ''},
    website: {type: String, default: ''},
    imageId: {type: String, default: ''},
    imageVersion: {type: String, default: ''}
});

module.exports = mongoose.model('Company', companySchema);