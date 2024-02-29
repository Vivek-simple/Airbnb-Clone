const User=require('../models/user');
module.exports.renderSignUpForm=(req,res)=>{
    res.render('user/signUp.ejs');
}

module.exports.createUser=async(req,res)=>{
    try {
        let {username,email,password}=req.body;
        const user=new User({username,email});
        const registerdUser=await User.register(user,password);
        req.login(registerdUser,(err)=>{
           if(err){
            next(err);
           } 
        req.flash('success','Welcome to Airbnb');
        res.redirect("/listings");  
        })
    } catch (error) {
       req.flash('error',error.message) 
       res.redirect('/signup')
    }
}

module.exports.renderLoginForm=(req,res)=>{
    res.render('user/login.ejs');
}

module.exports.userLogin=async (req,res)=>{
    req.flash('success','Welcome to Airbnb');
    let url=res.locals.redirectUrl || '/listings'
    res.redirect(url);
   }

module.exports.userLogout=(req,res,next)=>{
    req.logout((err)=>{
     if(err){
         next(err);
     }
     else{
     req.flash('success','you logged out')
     return res.redirect('/listings');
     }
    })
 }   