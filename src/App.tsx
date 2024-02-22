import { useEffect, useState } from "react";
import "./App.css";
import { useCategory } from "./context/CategoryContext";
import GameList from "./components/GameList";
import { AppWrapper, CategoryItem, MainContainer, Menu } from "./AppStyles";

function App() {
  const categories = [
    "Home",
    "New Games",
    "Slots",
    "Jackpots",
    "Live",
    "Blackjack",
    "Roulette",
    "Table",
    "Poker",
    "Other",
  ];
  const [localActiveCategory, setLocalActiveCategory] = useState("Home");
  const { setActiveCategory } = useCategory();

  useEffect(() => {
    setActiveCategory(localActiveCategory);
  }, [localActiveCategory, setActiveCategory]);

  return (
    <AppWrapper>
      <Menu>
        {categories.map((category) => (
          <CategoryItem
            key={category}
            className={category === localActiveCategory ? "active" : ""}
            onClick={() => setLocalActiveCategory(category)}
          >
            {category}
          </CategoryItem>
        ))}
      </Menu>
      <MainContainer>
        <GameList />
      </MainContainer>
    </AppWrapper>
  );
}

export default App;
