const Listing=require('../models/listing');
const Review=require('../models/review');

module.exports.createReview=async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    let {comment,rating}=req.body;
    let newReview=new Review({comment:comment,rating:rating})
    newReview.author=req.user._id;
    listing.reviews.push(newReview);
    await listing.save();
    await newReview.save();
    req.flash('success', 'Review Added Succesfully');
    res.redirect(`/listings/${id}`);
}

module.exports.deleteReview=async(req,res)=>{
    let {id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Review Deleted Succesfully');
    res.redirect(`/listings/${id}`);
  }