import { getMaskedString } from "./MaskingUtility";

function MaskedText({guessedLetters,originalWord}){
   const maskedString = getMaskedString(guessedLetters,originalWord);

   return (
    <>
        {maskedString.map((letter,idx)=>{
            return (
                <span key={idx} className="mx-1">
                    {letter}
                </span>
            )
        })}
    </>
   )

}

export default MaskedText;