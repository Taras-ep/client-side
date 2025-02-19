import React, { useState } from "react";
import '../../styles/form-user-sign-up.scss'
import SignUp from "./signUp/SignUp.tsx";
import { Link } from "react-router-dom";

const SignUpPage = () => {

    return (
        <div className="form-wrapper-sign-up">
            <div className="form-container-sign-up">
                <header className="form-header-sign-up">
                    <div className="get-back-to-log-in-page">
                        <Link to='/' className="log-in-page">{'< '}УВІЙТИ</Link>
                    </div>
                    <h1 >
                        РЕЄСТРАЦІЯ
                    </h1>
                    <div className="close-icon-container-sign-up">
                        <button type="button" title="close-auth-window">
                            <img src="/icons/close_icon.svg" alt="not avaliable" />
                        </button>
                    </div>
                </header>
                <form action="#" method="post" id="form-user-sign-up">
                    <SignUp />
                </form>
                <footer className="privacy-policy-sign-up">
                    <p>
                        Продовжуючи, ви погоджуєтеся на створення облікового запису <br />
                        та згоду на обробку персональних даних
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default SignUpPage