import { devEnvts } from "./dev.env";
import { prodEnvts } from "./prod.env";


export interface Enviorments{
    
    db_url : string
}

export function getEnviormentVariables(){

    if(process.env.NODE_ENV === 'production') {

        return prodEnvts;
    }
    return devEnvts;
}

