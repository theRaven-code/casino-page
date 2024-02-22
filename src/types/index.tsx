export interface Game {
  jackpotAmount: number;
  categories: string[];
  name: string;
  image: string;
  id: string;
}

export interface CategoryContextProps {
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  gamesData: Game[];
  fetchGamesData: () => void;
  filteredGames: Game[];
}
