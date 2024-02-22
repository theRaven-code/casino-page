import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Game } from "../types";
import { CategoryContextProps } from "../types";

const CategoryContext = createContext<CategoryContextProps | undefined>(
  undefined
);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("Home");
  const [gamesData, setGamesData] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);

  const fetchGamesData = async () => {
    try {
      const response = await fetch(
        "http://stage.whgstage.com/front-end-test/games.php"
      );
      const data: Game[] = await response.json();
      setGamesData(data);
    } catch (error) {
      console.error("Error fetching games data:", error);
    }
  };

  useEffect(() => {
    fetchGamesData();
  }, []);

  useEffect(() => {
    const getCorrespondingData = async (): Promise<Game[]> => {
      const lowercaseCategory = activeCategory.toLowerCase();
      console.log(lowercaseCategory);

      switch (lowercaseCategory) {
        case "new games":
          return gamesData.filter((game) => game.categories.includes("new"));

        case "other":
          return gamesData.filter((game) =>
            ["ball", "virtual", "fun"].some((category) =>
              game.categories.includes(category)
            )
          );

        case "slots":
        case "blackjack":
        case "live":
        case "roulette":
        case "poker":
          return gamesData.filter((game) =>
            game.categories.includes(lowercaseCategory)
          );

        case "jackpots":
          try {
            const jackpotResponse = await fetch(
              "http://stage.whgstage.com/front-end-test/jackpots.php"
            );
            const jackpotData: {
              game: string;
              gameId: string;
              amount: number;
            }[] = await jackpotResponse.json();

            const gamesWithJackpot = gamesData.filter((game) =>
              jackpotData.some((jackpot) => jackpot.game === game.id)
            );

            const gamesWithJackpotAmount = gamesWithJackpot.map((game) => ({
              ...game,
              jackpotAmount:
                jackpotData.find((jackpot) => jackpot.game === game.id)
                  ?.amount || 0,
            }));

            return gamesWithJackpotAmount;
          } catch (error) {
            console.error("Error fetching jackpot data:", error);
            return gamesData;
          }

        default:
          return gamesData;
      }
    };

    const updateFilteredGames = async () => {
      const newFilteredGames = await getCorrespondingData();
      setFilteredGames(newFilteredGames);
    };

    updateFilteredGames();
  }, [activeCategory, gamesData]);

  const contextValue: CategoryContextProps = {
    activeCategory,
    setActiveCategory,
    gamesData,
    fetchGamesData,
    filteredGames,
  };

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = (): CategoryContextProps => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
