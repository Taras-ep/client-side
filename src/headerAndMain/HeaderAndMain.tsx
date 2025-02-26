import React, { useEffect, useState } from "react";
import '../styles/main-page.scss'
import AddUserTaskForm from "../forms/AddUserTaskForm.tsx";

const HeaderAndMain = () => {

    let [isFormVisible, setIsFormVisible] = useState(false)

    function handleFormOnClick() {
        setIsFormVisible(prev => !prev);
    }
    return (
        <div className="header-and-main-content-container">
            <header className="tasks-list-control-and-logo">
                <div className="burger-menu">

                </div>
                <h1 className="logo">
                    MyTasks
                </h1>
                <div className="filter-and-add-new-task-buttons-container">
                    <button type="button" aria-label="add-button" onClick={() => { handleFormOnClick() }}><img src="../../icons/add-list_icon.png" className="add-button-img" alt="not-found" /> ADD</button>
                    <button type="button" aria-label="filter-button"><img src="../../icons/filter-list_icon.png" className="filter-button-img" alt="not-found" /> FILTER</button>
                </div>
            </header>
            <main className="main-content-container">
                <div className="tasks-list-container">
                    <div className="form-output">
                        {isFormVisible && <AddUserTaskForm onClose={() => {handleFormOnClick()}} />}
                    </div>
                    <div className="task-output">

                    </div>
                </div>
            </main>
        </div>
    )
}

export default HeaderAndMain