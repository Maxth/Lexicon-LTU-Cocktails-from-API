export const useCocktailAPi = () => {
  const getRandomCocktail = async (): Promise<{
    imgUrl: string;
    title: string;
    id: string;
  }> => {
    const res = await fetch(
      'https://thecocktaildb.com/api/json/v1/1/random.php'
    );
    const data = await res.json();
    return {
      imgUrl: data.drinks[0].strDrinkThumb,
      title: data.drinks[0].strDrink,
      id: data.drinks[0].idDrink,
    };
  };

  return {getRandomCocktail};
};
