import "./App.css";
import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import Categories from "./pages/Categories";
import Recipe from "./pages/Recipe";
import MyRecipes from "./pages/MyRecipes";
import Favorites from "./pages/Favorites";
import ShoppingList from "./pages/ShoppingList";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="addrecipe" element={<AddRecipe />} />
          <Route path="myrecipes" element={<MyRecipes />} />
          <Route path="recipe/:id" element={<Recipe />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="shoppinglist" element={<ShoppingList />} />
        </Route>
      </Route>
      <Route element={<PublicRoute />}>
        <Route path="welcome" element={<Welcome />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
