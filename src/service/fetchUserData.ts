import { CreateUser } from "./userService.ts";
import HttpError from "../errors/httpErrorHendlers.ts";
import CreateNewError from "../errors/errorHendlers.ts";

export async function FetchUserData(name: string, email: string, phoneNumber: string, password: string) {
    let user = new CreateUser()
    try {
        let userData = user.createUser(name, email, phoneNumber, password)
        if(userData) {
            let fetchUser = await fetch('http://localhost:2323/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            })
    
            if (!fetchUser.ok) {
                throw new HttpError(fetchUser.json());
            }
            return fetchUser.json()
        }
    } catch (error) {
        throw error
    }

}