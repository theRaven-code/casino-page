import React from "react";
import { useCategory } from "../context/CategoryContext";
import newLabel from '../assets/new-label.png';
import playBtn from '../assets/play-btn.png';
import { GameCard, TopRibbon, Label, GameImg, Overlay, OverlayPlayIcon, OverlayText } from "./GameStyles";
const GameList = () => {
  const { filteredGames } = useCategory();

  return (
    <>

      {filteredGames.map((game) => (
        <GameCard key={game.id}>
          {game.categories.includes("top") && <TopRibbon>Top</TopRibbon>}
          {game.categories.includes("new") && <Label src={newLabel} alt="New Label" />}
          <GameImg src={game.image} alt={game.name} loading="lazy"/>
          {game.jackpotAmount && <h3>£ {game.jackpotAmount}</h3>}
          <Overlay>
            <OverlayPlayIcon src={playBtn}/>
            <OverlayText>{game.name}</OverlayText>
            
          </Overlay>
        </GameCard>
      ))}
      {!filteredGames && <h1>There's no data</h1>} 
    </>
  );
};

export default GameList;
