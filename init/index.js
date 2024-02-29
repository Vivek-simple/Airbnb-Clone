const mongoose=require('mongoose');
const Listing=require('../models/listing');
const listing=require('./data')
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Airbnb');
}

main()
.then(res=>console.log('connection establish'))
.catch(err=>console.log(err));

async function addData(){
    await Listing.deleteMany({});
    const list= listing.data.map((obj)=>({...obj,owner:'65db7eae95bb800e41cce29f'}))
    await Listing.insertMany(list);
}

addData();