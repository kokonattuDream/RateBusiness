const User = require('../models.user');
const Company = require('../models/company');
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'companyrating',
    api_key: '334986354856358',
    api_secret: 'pao8wQZqgyyYsZBnEQyiAJXXANQ'
});

exports.addImage = async (req, res) =>{

}