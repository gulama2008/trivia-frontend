import  { useContext } from "react";
import { TriviaContext } from "../../TriviaContextProvider/TriviaContextProvider";
import Home from "../../components/Home/Home";
import NewGameContainer from "../NewGameContainer/NewGameContainer";
import FailedGame from "../../components/FailedGame/FailedGame";

const HomeContainer = () => {
  const {
    showNewGameContainer,
    showHome,
    showFailedGame,
  } = useContext(TriviaContext);
  return (
    <div>
      {showHome && <Home />}
      {showNewGameContainer && <NewGameContainer />}
      {showFailedGame && <FailedGame />}
    </div>
  );
};

export default HomeContainer;
