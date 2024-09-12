export function getMaskedString(guessedLetters,originalWord){
    guessedLetters = guessedLetters.map(letters=>letters.toUpperCase());
    const guessedLettersSet = new Set(guessedLetters);
    const result = originalWord.toUpperCase().split('').map(char=>{
        if(guessedLettersSet.has(char)){
            return char;
        } else{
            return "_";
        }
    });
    return result;
}