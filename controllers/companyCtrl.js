const User = require('../models/user');
const Company = require('../models/company');

exports.createCompany = async (req, res) => {

    if(req.body.name === undefined || req.body.address === undefined || req.body.city === undefined ||
        req.body.country === undefined || req.body.sector === undefined || req.body.website === undefined){
        return res.status(200).json({error: 'Cannot create company with empty fields'});
    }

    if(req.body.name === '' || req.body.address === '' || req.body.city === '' ||
        req.body.country === '' || req.body.sector === '' || req.body.website === ''){
        return res.status(200).json({error: 'Cannot submit empty fields'});
    }

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


exports.getAllCompanies = async (req, res) => {
    const results = await Company.find({});

    return res.status(200).json({result: results});
}

exports.addReview = async (req, res) => {

    if(req.body.culture === '' || req.body.benefits === '' || req.body.balance === '' 
        || req.body.speed === '' || req.body.review === '' || req.body.overall === ''){
            return res.status(200).json({error: 'No empty fields allowed'});
    }

    const company = await Company.update({
        "_id": req.body.companyId,
    },{
        $push: {rating: {
            user: req.body.userId,
            culture: req.body.culture,
            benefits: req.body.benefits,
            balance: req.body.balance,
            speed: req.body.speed,
            review: req.body.review
        },
            ratingOverall: req.body.overall,
            cultureTotal: req.body.culture,
            benefitTota: req.body.balance,
            speedTotal: req.body.speed
        },
        $inc: {totalStarts: req.body.overall}
    });

    return res.status(200).json({message: 'Review added successfully'});
}