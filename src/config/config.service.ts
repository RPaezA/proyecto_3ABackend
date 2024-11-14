import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import { parse } from 'dotenv';

@Injectable()
export class ConfigService {
    private readonly envConfig: {[key:string]:string}
    constructor(){
        const isDevelopmentEnv=process.env.NODE_ENV !== 'production'
        if(isDevelopmentEnv){
            const envFilePath=__dirname+'/../../.env.development'
            
            const existsPAth=fs.existsSync(envFilePath)
            if(!existsPAth){
                console.log('env.development no existe')
                process.exit(0)
            }
            this.envConfig=parse(fs.readFileSync(envFilePath))
        }
        else{
            const envFilePath=__dirname+'/../../.env.production'
            const existsPAth=fs.existsSync(envFilePath)
            if(!existsPAth){
                console.log('env.production no existe')
                process.exit(0)
            }
            this.envConfig=parse(fs.readFileSync(envFilePath))
        }
    }
    get(key:string):string{
        return this.envConfig[key];
    }
}
