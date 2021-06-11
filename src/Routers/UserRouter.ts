import { Router } from "express";
import {body} from 'express-validator';
import { UserController } from "../Controller/userController";
import { GlobalMiddlware } from "../Middleware/GlobalMiddlware";
import { UserValidator } from "../Validator/UserValidator";


class UserRouter{
    public router : Router

    constructor(){
        this.router = Router();

        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    getRoutes(){

    }
    
    postRoutes(){
        this.router.post('/signUp', UserValidator.signUp(), GlobalMiddlware.checkError,  UserController.signUp);
    }

    patchRoutes(){

        this.router.patch('/verify', UserValidator.verifyUser(), GlobalMiddlware.checkError, UserController.verify);
    }

    deleteRoutes(){

    }

    
}

export default new UserRouter().router;
