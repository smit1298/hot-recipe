import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LikedRecipes from "./pages/LikedRecipes";
import Recipes from "./pages/Recipes";
import { data } from "./data";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleLike = id => {
    setRecipes(recipes =>
      recipes.map(recipe =>
        recipe.id === id
          ? {
              ...recipe,
              isLiked: !recipe.isLiked,
            }
          : recipe
      )
    );
  };

  const filterRecipes = (event, recipes) => {
    const { value } = event.target;

    setRecipes(recipes =>
      recipes.filter(recipe => recipe.title.toLowerCase().includes(value.toLowerCase()))
    );

    if (value === "") setRecipes(recipes);
  };

  useEffect(() => {
    const modifyRecipes = recipes =>
      recipes.map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        isLiked: false,
      }));

    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=507a9b458b434c37b09b4d942cc24139&number=16"
    )
      .then(res => res.json())
      .then(data => {
        if (data) {
          setIsLoading(false);
          setRecipes(modifyRecipes(data.recipes));
        }
      })
      .catch(err => console.log(err));

    setRecipes(modifyRecipes(data.recipes));
  }, []);

  return (
    <>
      <NavBar recipes={recipes} filterRecipes={filterRecipes} />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              recipes={recipes}
              isLoading={isLoading}
              toggleLike={toggleLike}
            />
          }
        />
        <Route
          path='/recipes'
          element={
            <Recipes
              recipes={recipes}
              isLoading={isLoading}
              toggleLike={toggleLike}
            />
          }
        />
        <Route
          path='/liked-recipes'
          element={
            <LikedRecipes
              recipes={recipes}
              isLoading={isLoading}
              toggleLike={toggleLike}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
