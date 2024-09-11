import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({inputType,handleFormSubmit,handleTextInputChange,handleShowHideClick}){


    return (
         <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                type={inputType}
                    label="enter your word"
                    placeholder="enter a word or a pharse here.."
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    styleType="warning"
                    text={inputType==="password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                />
            </div>
            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>
         </form>
    )
}
export default TextInputForm;