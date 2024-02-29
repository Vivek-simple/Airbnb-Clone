const Listing=require('../models/listing')
const Review=require('../models/review')
const{ schema,Schema}=require('../schema');
const expressError=require('../utils/expressError');
module.exports.isLoggedIn=((req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl
        req.flash('error','you must be logged in');
       return res.redirect('/login');
    }
    next();
})

module.exports.saveRedirectUrl=((req,res,next)=>{
 if(req.session.redirectUrl){
    res.locals.redirectUrl=req.session.redirectUrl
 }
 next();
})

module.exports.ownerValidation=(async (req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id)
    if(!(res.locals.user._id.equals(listing.owner._id))){
        req.flash('error','you are not Authorized')
        return res.redirect(`/listings/${id}`);
    }
    next();
   })

module.exports.reviewValidation=(async (req,res,next)=>{
    let {id,reviewId}=req.params;
    let review=await Review.findById(reviewId)
    if(!(res.locals.user._id.equals(review.author._id))){
        req.flash('error','you are not Authorized')
        return res.redirect(`/listings/${id}`);
    }
    next();
   })

module.exports.validateListing=(req,res,next)=>{
    let {error}=schema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",")
        throw new expressError(400,error);
    }
    else{
        next();
    }
 }

 module.exports.validateReview=(req,res,next)=>{
    let {error}=Schema.validate(req.body);
    if(error){
        throw new expressError(400,error);
    }
    else{
        next();
    }
 }