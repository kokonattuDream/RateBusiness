const User = require('../models.user');
const Company = require('../models/company');
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'companyrating',
    api_key: '334986354856358',
    api_secret: 'pao8wQZqgyyYsZBnEQyiAJXXANQ'
});

exports.addImage = async (req, res) =>{
    cloudinary.uploader.upload(req.body.image, (result) => {
        const savedData = async() => {
            if(req.body.image){
                await User.update({
                    '_id':req.body.user._id
                },{
                    "imageId": result.public_id,
                    "imageVersion": result.version
                });
            }
        }

        savedData()
            .then(res => {
                return res.status(200).json({message: 'Profile image upload'});
            })
    });
}