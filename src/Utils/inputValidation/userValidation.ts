import CreateNewError from "../../errors/errorHendlers.ts";

export const UserInputValidator = (name: string, email: string, phoneNumber: string, password: string) => {
    // checking empty inputs
    if (!name) throw new CreateNewError({ fieldName: "name", errorMessage: "Поле не повинно бути пустим" }, "Validation error");
    if (!email) throw new CreateNewError({ fieldName: "email", errorMessage: "Поле не повинно бути пустим" }, "Validation error");
    if (!phoneNumber) throw new CreateNewError({ fieldName: "phoneNumber", errorMessage: "Поле не повинно бути пустим" }, "Validation error");
    if (!password) throw new CreateNewError({ fieldName: "password", errorMessage: "Поле не повинно бути пустим" }, "Validation error");

    if (/[0-9]+/.test(name)) throw new CreateNewError({ fieldName: "name", errorMessage: "Ім'я повинне містити виключно літери" }, "Validation error");
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) throw new CreateNewError({ fieldName: "email", errorMessage: "Неправильна електронна адреса" }, "Validation error");
    if (phoneNumber.length < 10 || phoneNumber.length > 15) throw new CreateNewError({ fieldName: "phoneNumber", errorMessage: "Неправильний номер телефону" }, "Validation error");

    // passwor validation
    if (password.length < 8) throw new CreateNewError({ fieldName: "password", errorMessage: "Пароль повинен містити мінімум 8 символів" }, "Validation error");
    if (!/[a-z]/.test(password)) throw new CreateNewError({ fieldName: "password", errorMessage: "Пароль повинен містити хоча б одну малу літеру" }, "Validation error");
    if (!/[A-Z]/.test(password)) throw new CreateNewError({ fieldName: "password", errorMessage: "Пароль повинен містити хоча б одну велику літеру" }, "Validation error");
    if (!/[0-9]/.test(password)) throw new CreateNewError({ fieldName: "password", errorMessage: "Пароль повинен містити хоча б одну цифру" }, "Validation error");
    if (!/[@$!%^&*_?]/.test(password)) throw new CreateNewError({ fieldName: "password", errorMessage: "Пароль повинен містити хоча б один спеціальний символ" }, "Validation error");

    return true;
};
