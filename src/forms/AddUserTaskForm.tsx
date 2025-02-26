import React from "react";
import '../styles/add-user-task-form.scss'
import ButtonContinue from "../Utils/ButtonContinue/ButtonContinue.tsx";

interface Props {
    onClose: ()=> void
}

const AddUserTaskForm = (props:Props) => {

    return (
        <form className="tasks-form-container">
            <header>
                <h1>
                    ADD TASK
                    <button onClick={()=> {props.onClose()}} type="button"><img src="/icons/close_icon.svg" alt="not avaliable" /></button>
                </h1>
            </header>
            <div className="task-form">
                <input aria-label="task-name" placeholder="TASK NAME" className="task-name" type="text" />
                <textarea aria-label="task-description" placeholder="TASK DESCRIPTION" className="task-description"/>
                <input aria-label="deadline" className="task-deadline" type="date" />
                <ButtonContinue onContinue={()=>{}} text="SUBMIT" isActive={true} />
            </div>
        </form>
    )
}

export default AddUserTaskForm