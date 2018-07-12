const User = require('../models/user');
const Company = require('../models/company');

exports.createCompany = async (req, res) => {

    const newCompany = new Company();

    newCompany.companyname = req.body.name;
    newCompany.address = req.body.address;
    newCompany.city = req.body.city;
    newCompany.country = req.body.country;
    newCompany.sector = req.body.sector;
    newCompany.website = req.body.website;
    newCompany.admin = req.body.userId;

    const company = await newCompany.save();

    return res.status(200).json({message: 'Company created successfully'});

}