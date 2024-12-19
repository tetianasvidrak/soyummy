import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { setBearerToken } from "./axios/axios";

import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories";
import AddRecipe from "./pages/AddRecipe";
import Recipe from "./pages/Recipe";
import MyRecipes from "./pages/MyRecipes";
import Favorites from "./pages/Favorites";
import ShoppingList from "./pages/ShoppingList";
import SearchRecipe from "./pages/SearchRecipe";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

function App() {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const token = useSelector((state) => state.auth.token);

  if (token) {
    setBearerToken(token);
  }

  return (
    <div className={isDarkMode ? "dark font-poppins" : "font-poppins"}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="addrecipe" element={<AddRecipe />} />
            <Route path="recipe/:id" element={<Recipe />} />
            <Route path="myrecipes" element={<MyRecipes />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="shoppinglist" element={<ShoppingList />} />
            <Route path="searchrecipe" element={<SearchRecipe />} />
          </Route>
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
