import CreaterUserError from "./errorHendlers.ts"

export const UserInputValidator = (name: string, email: string, phoneNumber: string, password: string) => {
    let error = new CreaterUserError()

    if (/[0-9]+/.test(name)) {
        error.errors.push({
            fieldName: "name",
            errorMessage: "Name must not contain a number"
        })
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        error.errors.push({
            fieldName: "email",
            errorMessage: "Incorrect email adrres"
        })
    }

    if (phoneNumber.length < 10 || phoneNumber.length > 15) {
        error.errors.push({
            fieldName: "phoneNumber",
            errorMessage: "Incorrect phone number, it must have between 10 and 15 symbols"
        })
    } 

    if (password.length < 8) {
        error.errors.push({
            fieldName: "password",
            errorMessage: "password must contain 8 or more symbols"
        })
    } else if (!/[a-z]/.test(password)) {
        error.errors.push({
            fieldName: "password",
            errorMessage: 'password must have at list one lowercase letter'
        })
    } else if (!/[A-Z]/.test(password)) {
        error.errors.push({
            fieldName: "password",
            errorMessage: 'password must have at list one uppercase letter'
        })
    } else if (!/[0-9]/.test(password)) {
        error.errors.push({
            fieldName: "password",
            errorMessage: 'password must have at list one digit'
        })
    } else if (!/[@$!%^&*_?]/.test(password)) {
        error.errors.push({
            fieldName: "password",
            errorMessage: 'password must have at list one special symbol'
        })

    }

    if (error.errors.length > 0) {
        throw error
    }
    return true
}



