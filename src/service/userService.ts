import { UserInputValidator } from "../Utils/inputValidation/userValidation.ts";

interface createUserJSON {
    name?: string,
    email?: string,
    phoneNumber?: string,
    password?: string,
}

class CreateUser {

    private createUserJSON: createUserJSON = {}
    private isValidated: boolean

    public createUser(name: string, email: string, phoneNumber: string, password: string) {
        try {
            this.isValidated = UserInputValidator(name, email, phoneNumber, password)
            if(this.isValidated) {
                this.createUserJSON = { name, email, phoneNumber, password }
                return this.createUserJSON
            }
        } catch (error) {
            this.isValidated = false
            throw error
        }
    }
}

export { CreateUser };

