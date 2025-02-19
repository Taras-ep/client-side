import { CreateUser } from "./userService.ts";
import CreaterUserError from "../Utils/inputValidation/errorHendlers.ts";

export async function FetchUserData(name: string, email: string, phoneNumber: string, password: string) {
    let userError = new CreaterUserError()
    let user = new CreateUser()
    let userData = user.createUser(name, email, phoneNumber, password)
    try {
        let fetchUser = await fetch('http://localhost:2323/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })

        if (!fetchUser.ok) {
            throw new Error(`HTTP error! status: ${fetchUser.status}`);
        }

        return fetchUser.json()
    } catch (error) {
        userError.errors.push(error.error)
        console.log(userError.errors)
        return userError.errors
    }

}