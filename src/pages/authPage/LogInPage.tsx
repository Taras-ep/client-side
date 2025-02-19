import React, { useState } from "react";
import '../../styles/form-user-log-in.scss'
import LogIn from './logIn/LogIn.tsx'

const AuthForm = () => {

    return (
        <div className="form-wrapper">
            <div className="form-container">
                <header className="form-header">
                    <div className="form-header-container">
                        <h1 >
                            УВІЙТИ
                        </h1>
                        <div className="close-icon-container">
                            <button type="button" title="close-auth-window">
                                <img src="/icons/close_icon.svg" alt="not avaliable" />
                            </button>
                        </div>
                    </div>
                </header>
                <form action="#" method="post" id="form-user-auth">
                    <LogIn />
                </form>
                <div className="log-in-with">
                    <h2>
                        Увійти за допомогою:
                    </h2>
                    <div className="log-in-with-icons-container">
                        <a target="blank" className="auth-with-google"><img alt="not avaliable" src="/icons/google_icon.svg"></img></a>
                        <a target="blank" className="auth-with-twitter"><img alt="not avaliable" src="/icons/twitter_icon.svg"></img></a>
                        <a target="blank" className="auth-with-facebook"><img alt="not avaliable" src="/icons/facebook_icon.svg"></img></a>
                        <a target="blank" className="auth-with-icloud"><img alt="not avaliable" src="/icons/apple_icon.png"></img></a>
                    </div>
                </div>
                <footer className="privacy-policy">
                    <p>
                        Продовжуючи, ви погоджуєтеся на створення облікового запису <br />
                        та згоду на обробку персональних даних
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default AuthForm