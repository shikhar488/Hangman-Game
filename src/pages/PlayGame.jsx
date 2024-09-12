import { Link, useLocation} from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame(){

    const {state} = useLocation();

    return(
        <>
            <h1>Play Game {state.wordSelected} </h1>
            <MaskedText guessedLetters={[]} originalWord={state.wordSelected} />
            <Link to='/start' className="text-blue-400">Start Game Link</Link>
        </>
    )
}
export default PlayGame;