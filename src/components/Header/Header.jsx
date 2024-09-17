import Container from "../Container/Container";

import logo from "../../assets/icons/logo.svg";

const Header = () => {
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
        </div>
      </Container>
    </header>
  );
};

export default Header;
