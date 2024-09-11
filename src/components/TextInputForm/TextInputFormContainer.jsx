import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){

    const [inputType,setInputType]=useState("password");

        function handleFormSubmit(event){
            event.preventDefault();
        }
    
        function handleTextInputChange(event){
            console.log(event.target.value);
        }
        function handleShowHideClick(){
            console.log("show/hide click");
            if(inputType==="password"){
                setInputType("text");
            }
            else{
                setInputType("password");
            }
        }
        return (
                <TextInputForm 
                inputType={inputType}
                handleFormSubmit={handleFormSubmit}
                handleTextInputChange={handleTextInputChange}
                handleShowHideClick={handleShowHideClick}
                />
        )
}
export default TextInputFormContainer;