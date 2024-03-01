const Listing=require('../models/listing');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const token=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken:token});
module.exports.showListings=async (req,res)=>{
    let listings=await Listing.find({});
    res.render('listings/listings.ejs',{listings});
    }

module.exports.renderListingForm=(req,res)=>{
    res.render('listings/new.ejs');
}

module.exports.showIndividualListing=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id)
    .populate({
    path:'reviews',
    populate:{
    path:'author'
    },
  }) 
  .populate('owner');
    if(!listing){
    req.flash('error', 'Listing You want to show will be deleted');
    res.redirect('/listings');
    }
     res.render('listings/show.ejs',{listing});
}

module.exports.createListing=async (req,res,next)=>{
    let response=await geocodingClient.forwardGeocode({
        query: req.body.Listing.location,
        limit: 1
      })
        .send()
    let url=req.file.path;
    let filename=req.file.filename;
    let newListing=new Listing(req.body.Listing);
    newListing.owner=res.locals.user._id;
    newListing.image={url,filename};
    newListing.geometry=response.body.features[0].geometry;
    await newListing.save();
     req.flash('success', 'Listing Added Succesfully');
     res.redirect("/listings"); 
}

module.exports.renderEditListingForm=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing){
        req.flash('error', 'Listing You want to edit will be deleted');
        res.redirect('/listings');
        }
    res.render('listings/edit.ejs',{listing});
}

module.exports.updateListing=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id,{... req.body.Listing})
    if(typeof req.file!=='undefined'){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        await listing.save();
    }
    req.flash('success', 'Listing Edit Succesfully');
    res.redirect(`/listings/${id}`);
    }

module.exports.deleteListing=async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success', 'Listing Deleted Succesfully');
    res.redirect('/listings'); 
}    

module.exports.searchListing=async(req,res)=>{
    let {location,category}=req.query;
    let listings;
    if(location){
     listings=await Listing.find({
    location: { $regex: new RegExp(location, 'i') } });
    }
    else if(category){
       listings= await Listing.find({
        category: { $regex: new RegExp(category, 'i') } });
    }
    res.render('listings/listings.ejs',{listings});
}
