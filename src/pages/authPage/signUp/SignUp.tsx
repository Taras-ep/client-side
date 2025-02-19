import React, { useRef } from "react";
import { useButtonIsActiveStyle } from "../../../Utils/hooks/buttonIsActiveStyle.tsx";
import '../../../styles/sign-up.scss'
import ButtonContinue from "../../../Utils/ButtonContinue/ButtonContinue.tsx";
import { FetchUserData } from "../../../service/fetchUserData.ts";

const SignUp = () => {

    const userNameInputRef = useRef<HTMLInputElement>(null)
    const userEmailInputRef = useRef<HTMLInputElement>(null)
    const userPhoneNumberInputRef = useRef<HTMLInputElement>(null)
    const userPasswordInputRef = useRef<HTMLInputElement>(null)

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
                console.error("Error creating user:", error);
            }
        }
    }
    
    return (
        <div className="input-sign-up-container">
            <div className="user-name_input-container input__container">
                <input
                    type="text"
                    aria-label="user-name"
                    ref={userNameInputRef}
                    onChange={(e) => setIsActive(e.target.value.length > 0)}
                    placeholder="Ім'я"
                />
                <div className="show-validation-error">

                </div>
            </div>
            <div className="user-email_input-container input__container">
                <input
                    type="email"
                    aria-label="email"
                    ref={userEmailInputRef}
                    onChange={(e) => setIsActive(e.target.value.length > 0)}
                    placeholder="Електронна адреса"
                />
            </div>
            <div className="user-phone-number_input-container input__container">
                <input
                    type="text "
                    aria-label="user-phone-number"
                    ref={userPhoneNumberInputRef}
                    onChange={(e) => setIsActive(e.target.value.length > 0)}
                    placeholder="Номер телефону"
                />
            </div>
            <div className="user-password_input-container input__container">
                <input
                    type="password"
                    aria-label="user-password"
                    ref={userPasswordInputRef}
                    onChange={(e) => setIsActive(e.target.value.length > 0)}
                    placeholder="Пароль(мінімум 8 символів)"
                />
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