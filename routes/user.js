const express=require('express');
const router=express.Router();
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middlewares/authentication');
const userController=require('../controllers/user');

router
.route('/signup')
.get(userController.renderSignUpForm)
.post(wrapAsync(userController.createUser));

router
.route('/login')
.get(userController.renderLoginForm)
.post(saveRedirectUrl,
 passport.authenticate('local',{
 failureRedirect:'/login',
 failureFlash:true,
}),
userController.userLogin
 )

router.get('/logout',userController.userLogout)

module.exports=router