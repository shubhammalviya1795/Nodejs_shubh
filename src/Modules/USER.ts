import * as mongoose from 'mongoose';

import {model} from 'mongoose';


const userschema = new mongoose.Schema({
    
    email : {type : String, required : true},
    pwd : {type: String, required : true},
    username : {type: String, required : true},
    verified : { type: Boolean, required: true, default: false},
    verification_token: {type: Number, required: true},
    verification_token_time: {type: Date, required : true},
    created_by : {type: Date, required : true, default : new Date()},
    updated_by : {type: Date, required : true, default : new Date()}
    });

    export default model('users', userschema);

