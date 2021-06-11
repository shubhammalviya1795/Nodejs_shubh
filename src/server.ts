import bodyParser = require('body-parser');
import * as express from 'express';
import * as mongoose from 'mongoose';
import { getEnviormentVariables } from './Enviorments/env';
import UserRouter from './Routers/UserRouter';

export class Server {

    public app: express.Application = express();

    constructor (){
        this.setConfigurations();
        this.setRoutes();
        this.error404handler();
        this.handleErrors();
        
    }
   

setConfigurations(){
    this.connectMongoDb()
    this.configbodyParser()
}

connectMongoDb(){

    const databaseUrl = getEnviormentVariables().db_url;
    
    mongoose.connect(getEnviormentVariables().db_url, 
    {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> {
        console.log('mongo db is connected');

    });

}
configbodyParser() {
    this.app.use(bodyParser.urlencoded({extended:true}));

}

setRoutes(){
    this.app.use('/api/user', UserRouter);
}

error404handler() {
    this.app.use((req, res)=>{

        res.status(404).json({
            message : 'not found',
            status_code : 404
        });
    });

}
    handleErrors() {
        this.app.use((error, req, res, next )=>{

               const errorStatus = req.erroStatus || 500;
               res.status(errorStatus).json({
                   message : error.message || 'something went wrong, please try again',
                   status_code : errorStatus
               });

            });
       
    
        }
}


