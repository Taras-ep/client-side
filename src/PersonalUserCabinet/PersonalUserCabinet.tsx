import React from "react";
import { Link } from "react-router-dom";
import '../styles/main-page.scss'

const PersonalUserCabinet = () => {
    return (
        <div className="controls-panel">
            <div className="user-page">
                <div className="user-auth-container">
                    <Link to={"/LogInPage"}>LOG IN</Link>
                </div>
                <div className="user-info-container">
                    <div className="user-avatar">
                        <img alt="not found" src="../../icons/unautorizedUser.jpg" className="user-profile-img-container" />
                    </div>
                    <div className="user-data-container">
                        <p className="user-name-container">Name: </p>
                        <p className="user-email-container">Email: </p>
                        <p className="user-phone-number-container">Phone number: </p>
                    </div>
                </div>
                <div className="edit-user-profile">
                    <img alt="not found" src="../../icons/editProfile.png" className="user-edit-profile-img-container" /> <button type="button">EDIT PROFILE</button>
                </div>
                <div className="users-controls-panel">

                </div>
            </div>
            <footer className="main-page-footer">
                <span>Contacts:</span><a href="#"><img alt="not found" src="../../icons/telegram.png" /></a>
            </footer>
        </div>
    )
}

export default PersonalUserCabinet