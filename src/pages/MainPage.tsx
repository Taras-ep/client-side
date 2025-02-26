import React from "react";
import '../styles/main-page.scss'
import { Link } from "react-router-dom";
import PersonalUserCabinet from "../PersonalUserCabinet/PersonalUserCabinet.tsx";
import HeaderAndMain from "../headerAndMain/HeaderAndMain.tsx";

const MainPage = () => {
    return (
        <div className="main-page-container">
             <PersonalUserCabinet/>
            <HeaderAndMain/>
        </div>
    )
}

export default MainPage