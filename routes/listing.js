const express=require('express');
const multer  = require('multer');
const {storage}=require('../cloudConfig');
const router=express.Router();
const wrapAsync=require('../utils/wrapAsync');
const {isLoggedIn,ownerValidation}=require('../middlewares/authentication.js');
const {validateListing}=require('../middlewares/authentication.js');
const listingController=require('../controllers/listing.js');
const upload = multer({storage});

router
  .route('/')
  .get(wrapAsync(listingController.showListings))
  .post(upload.single('Listing[image]'),isLoggedIn,wrapAsync(listingController.createListing));
    
router.get('/new',isLoggedIn,listingController.renderListingForm);
router.get('/search',wrapAsync(listingController.searchListing))
    
router
  .route('/:id')
  .get(wrapAsync(listingController.showIndividualListing))
  .put(upload.single('Listing[image]'),validateListing,wrapAsync(listingController.updateListing))
  .delete(isLoggedIn,ownerValidation,wrapAsync(listingController.deleteListing));   
    
router.get('/:id/edit',isLoggedIn,ownerValidation,wrapAsync(listingController.renderEditListingForm));

module.exports=router;