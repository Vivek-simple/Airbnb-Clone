const express=require('express');
const router=express.Router({mergeParams:true});
const wrapAsync=require('../utils/wrapAsync');
const {validateReview,reviewValidation,isLoggedIn}=require('../middlewares/authentication.js');
const reviewController=require('../controllers/review.js')

// REVIEWS

router.post('/',isLoggedIn,validateReview,wrapAsync(reviewController.createReview))
  
router.delete('/:reviewId',isLoggedIn,reviewValidation,wrapAsync(reviewController.deleteReview))

module.exports=router;