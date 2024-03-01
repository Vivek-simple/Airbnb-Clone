if(process.env.NODE_ENV!="production"){
require('dotenv').config()
}

const express=require('express');
const app=express();
const mongoose=require('mongoose');
const ejsMate=require('ejs-mate');
const path=require('path');
const methodOverride = require("method-override");
const expressError=require('./utils/expressError');
const listingRoute=require('./routes/listing.js');
const reviewRoute=require('./routes/review.js');
const userRoute=require('./routes/user.js')
const session=require('express-session');
const flash=require('connect-flash');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('./models/user.js')
const Listing=require('./models/listing');
app.set('view engine','ejs');
app.set("view engine", "ejs");
app.engine('ejs', ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Airbnb');
};

main()
.then(res=>console.log('connection establish'))
.catch(err=>console.log(err));

const sess={
    secret:process.env.SECRET_KEY,
    resave: false,
  saveUninitialized: true,
  cookie:{
    expires:Date.now() + 7*24*60*60*1000,
    maxAge:1000*60*60*24*7,
    httpOnly:true
  }
}

app.use(session(sess));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    res.locals.user=req.user;
    next();
})

app.use('/listings',listingRoute);
app.use('/listings/:id/reviews',reviewRoute);
app.use('/',userRoute);

app.all('*',(req,res,next)=>{
next(new expressError(404,"page not found"));
})

app.use((err,req,res,next)=>{
    let{statusCode=500,message='something went wrong'}=err;
    // res.status(statusCode).send(message);
    // res.send("something went wrong");
    res.status(statusCode).render('listings/error.ejs',{message});
})

app.listen(3000,()=>{
    console.log('server is running port 3000');
});
