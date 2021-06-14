import { hash } from '../services/hashManager'
import * as signupBusiness from '../business/signupBusiness'
import { generateToken } from '../services/authenticator'
import { generateId } from '../services/idGenerator'
import {userData} from '../model/user'
// import {createUser} from '../data/signupData'

export const createUser = async (userData: userData) => {
    
    try{

        if(!userData.name || !userData.email || !userData.password || !userData.role){
            throw new Error("Please fill all the fields");
        }

        if(userData.email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }

        if(userData.password.length < 6){
            throw new Error("Password must have at least 6 characters");
        }

        const id = generateId();
        const hashPassword = await hash(userData.password);
        await signupBusiness.createUser(id, userData.email, userData.name, hashPassword, userData.role);
        const token = generateToken({id, role: userData.role});
        
        return token;

    } catch(error) {
        throw new Error( error.message || "Error creating user. Please check your system administrator.");
    }
}