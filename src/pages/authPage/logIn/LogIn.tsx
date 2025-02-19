import React, { useEffect, useRef } from "react";
import { useButtonIsActiveStyle } from "../../../Utils/hooks/buttonIsActiveStyle.tsx";
import '../../../styles/log-in.scss'
import ButtonContinue from "../../../Utils/ButtonContinue/ButtonContinue.tsx";
import { placeholderInputAnimation } from '../../../Utils/placeholderInputAnimation/placeholderInputAnimation.ts'
import { Link } from "react-router-dom";

const LogIn = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { isActive, setIsActive } = useButtonIsActiveStyle(inputRef)

    useEffect(() => {
        const intervalID = placeholderInputAnimation(inputRef, ['myEmail123@gmail.com', '+380 12 115 89 36'], 200);
        return intervalID
    }, []);

    return (
        <div className="input-log-in-input-container">
            <div className="user-email-phone-number_input-container">
                <input
                    ref={inputRef}
                    type="text"
                    aria-label="email-phone-number"
                    onChange={(e) => setIsActive(e.target.value.length > 0)}
                />
                <span className="sign-up-container">
                    <span className="sign-up-text">немає облікового запису ?</span>
                    <Link to="/SignUpPage" className="sign-up-ref">ЗАЄСТРУВАТИСЯ</Link>
                </span>
                <div className="button-container-log-in">
                    <ButtonContinue isActive={isActive} text={'ПРОДОВЖИТИ'} onContinue={() => { }} />
                </div>
            </div>
        </div>
    );
};

export default LogIn;