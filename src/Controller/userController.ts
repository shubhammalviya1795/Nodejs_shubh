import  USER  from '../Modules/USER';

import {validationResult} from 'express-validator';
import { Utils } from '../Utils/Utils';

export class UserController{

   
static async signUp ( req , res, next){
      
   const email = req.body.email;
   const pwd = req.body.pwd;
   const username = req.body.username;

   const data = {
       email: email,
       pwd : pwd,
       username : username,
       verification_token : Utils.generateVerificationToken(),
       verification_token_time : Date.now() + new Utils().Max_Token_Time
   };

   try {
       let user = await new USER(data).save();
       // send verification Email
       res.send(user);
   } catch(e){
       next(e);
   }
}


    static async verify (req, res, next){
    const verificationToken = req.body.verification_token;
    const email = req.body.email;

    try{

        const user = await USER.findOneAndUpdate( {
        email : email, verification_token : verificationToken,
        verification_token_time: { $gt : Date.now()}
        }, {verified: true}, {new: true});

        if(user){  
            res.send(user);
        } else {
             throw new Error ('verification Token is Expired. Please Request for a new one')          
        }
     } catch(e){
          next(e);
            }
                      
    }        
}





   /* let user = new USER(data);

   user.save().then((user)=>{
       res.send(user);
   }).catch(err=>{
       next(err);
    }) */
