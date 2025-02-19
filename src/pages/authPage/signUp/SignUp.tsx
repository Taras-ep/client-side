import React, { useRef, useState, useMemo } from "react";
import { useButtonIsActiveStyle } from "../../../Utils/hooks/buttonIsActiveStyle.tsx";
import '../../../styles/sign-up.scss'
import '../../../styles/mediaRequests/auth-form-media-req.scss'
import ButtonContinue from "../../../Utils/ButtonContinue/ButtonContinue.tsx";
import { FetchUserData } from "../../../service/fetchUserData.ts";
import CreateNewError from "../../../errors/errorHendlers.ts";
import HttpError from "../../../errors/httpErrorHendlers.ts";
import OutputValidationError from "../../../Utils/inputValidation/outputValidationError.ts";


const SignUp = () => {

    const userNameInputRef = useRef<HTMLInputElement>(null)
    const userEmailInputRef = useRef<HTMLInputElement>(null)
    const userPhoneNumberInputRef = useRef<HTMLInputElement>(null)
    const userPasswordInputRef = useRef<HTMLInputElement>(null)

    const [validationError, setValidationError] = useState({
        fieldName: '',
        errorMessage: ''
    })

    const outputValidationError = useMemo(() =>
        new OutputValidationError(validationError.fieldName, validationError.errorMessage),
        [validationError]
    );

    const { isActive, setIsActive } = useButtonIsActiveStyle([userNameInputRef, userEmailInputRef, userPhoneNumberInputRef, userPasswordInputRef])

    async function createUserOnClick() {
        if (
            userNameInputRef.current &&
            userEmailInputRef.current &&
            userPhoneNumberInputRef.current &&
            userPasswordInputRef.current
        ) {
            try {
                const response = await FetchUserData(
                    userNameInputRef.current.value,
                    userEmailInputRef.current.value,
                    userPhoneNumberInputRef.current.value,
                    userPasswordInputRef.current.value
                );
                console.log("User created:", response);
            } catch (error) {
                if (error instanceof CreateNewError) {
                    setValidationError({ fieldName: error.error.fieldName, errorMessage: error.error.errorMessage })
                }
            }
        }
    }

    return (
        <div className="input-sign-up-container">
            <div className="user-name_input-container input__container">
                <div className="output-error-pisition__configurator">
                    <input
                        type="text"
                        aria-label="user-name"
                        ref={userNameInputRef}
                        onChange={(e) => setIsActive(e.target.value.length > 0)}
                        placeholder="Ім'я"
                    />
                    <div className="show-validation-error">
                        {outputValidationError.showValidationErrorName()}
                    </div>
                </div>
            </div>
            <div className="user-email_input-container input__container">
                <div className="output-error-pisition__configurator">
                    <input
                        type="email"
                        aria-label="email"
                        ref={userEmailInputRef}
                        onChange={(e) => setIsActive(e.target.value.length > 0)}
                        placeholder="Електронна адреса"
                    />
                    <div className="show-validation-error">
                        {outputValidationError.showValidationErrorEmail()}
                    </div>
                </div>
            </div>
            <div className="user-phone-number_input-container input__container">
                <div className="output-error-pisition__configurator">
                    <input
                        type="text "
                        aria-label="user-phone-number"
                        ref={userPhoneNumberInputRef}
                        onChange={(e) => setIsActive(e.target.value.length > 0)}
                        placeholder="Номер телефону"
                    />
                    <div className="show-validation-error">
                        {outputValidationError.showValidationErrorPhoneNumber()}
                    </div>
                </div>
            </div>
            <div className="user-password_input-container input__container">
                <div className="output-error-pisition__configurator">
                    <input
                        type="password"
                        aria-label="user-password"
                        ref={userPasswordInputRef}
                        onChange={(e) => setIsActive(e.target.value.length > 0)}
                        placeholder="Пароль(мінімум 8 символів)"
                    />
                    <div className="show-validation-error">
                        {outputValidationError.showValidationErrorPassword()}
                    </div>
                </div>
            </div>
            <div className="button-container-sign-up">
                <ButtonContinue isActive={isActive} text={'ПІДТВЕРДИТИ'} onContinue={() => {
                    createUserOnClick()
                }} />
            </div>
        </div>
    );
};

export default SignUp