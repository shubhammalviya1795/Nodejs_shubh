import * as nodeMailer from 'nodeMailer';

import * as SendGrid from 'nodemailer-sendgrid-transport';
 

export class NodeMailer{

    private static initializeTransport(){

        return nodeMailer.createTransport(SendGrid({
            auth: {
               
                api_key: 'SENDGRID_PASSWORD'
            }
        }))
        
    }

}