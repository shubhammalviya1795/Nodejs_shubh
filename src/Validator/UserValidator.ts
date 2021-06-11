import {body} from 'express-validator';
import USER from '../Modules/USER';

export class UserValidator{
  
    static signUp(){
        return [body('email','email is req.').isEmail().custom((email, {req})=>{
            console.log(req.body);
            
            return USER.findOne({email: email}).then(user=>{
                if(user){
                    throw new Error ('user already exit');
                }
                else{
                    return true;
                }
            })
        }),
               body('pwd', 'password is req.').isAlphanumeric().isLength({min: 8, max: 20}).
               withMessage('pwd should be 8-20 char only'),
               body('username', 'username is req.').isString()];

    }
     static verifyUser(){
         return [body( 'verification_token', 'verification token is req.').isNumeric(),
        body('email', 'Email is required').isEmail()]

     }
}


