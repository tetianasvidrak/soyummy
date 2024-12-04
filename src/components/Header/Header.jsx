import { NavLink, useParams, useNavigate } from "react-router-dom";

import Container from "../Container/Container";
import Icon from "../Icon";

import logo from "../../assets/icons/logo.svg";

const Header = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const navigationList = [
    { label: "Categories", path: "/categories" },
    { label: "Add recipes", path: "/addrecipe" },
    { label: "My recipes", path: "/myrecipes" },
    { label: "Favorites", path: "/favorites" },
    { label: "Shopping List", path: "/shoppinglist" },
  ];

  return (
    <header className="relative z-10 mt-[18px]">
      <Container>
        <div className="flex justify-between items-center text-sm font-medium">
          <img
            className="w-11 h-11 cursor-pointer"
            src={logo}
            alt="Logo"
            onClick={() => navigate("/")}
          />
          <ul className="flex gap-8 text-black dark:text-white ">
            {navigationList.map((link, index) => (
              <li
                key={index}
                className={`transition ease-in-out delay-75 hover:text-green cursor-pointer`}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-green"
                      : id
                      ? "text-green hover:text-black"
                      : ""
                  }
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <NavLink
              className={({ isActive }) => (isActive ? "text-green" : "")}
              to="/searchrecipe"
            >
              <Icon
                name="search"
                fill="none"
                hoverColor="green"
                stroke="currentColor"
                size="6"
                strokeWidth="2"
              />
            </NavLink>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
