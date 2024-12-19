export const customStyles = (darkMode, size, error) => ({
  control: (provided) => ({
    ...provided,
    width: size,
    border: error
      ? "1px solid #E74A3B"
      : darkMode
      ? "1px solid #fff"
      : "transparent",
    boxShadow: "none",
    outline: "none",
    textAlign: "left",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: darkMode ? "#1E1F28" : "",
    color: darkMode ? "#fff" : "#000",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      border: error
        ? "1px solid #E74A3B"
        : darkMode
        ? "1px solid #aaa"
        : "transparent", // Міняємо рамку при ховері
      backgroundColor: darkMode ? "#252836" : "#f5f5f5", // М'який фон при наведенні
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: darkMode ? "white" : "black",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : darkMode ? "white" : "black",
    backgroundColor: state.isSelected
      ? "#8BAA36"
      : darkMode
      ? "#1E1F28"
      : "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#8BAA36", // Фон при ховері
      color: "white",
    },
    "&:active": {
      backgroundColor: "#8BAA36", // Фон при натисканні
      color: "white",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  menuList: (provided) => ({
    ...provided,
    backgroundColor: darkMode ? "#1E1F28" : "white",
    "::-webkit-scrollbar": {
      width: "7px",
      height: "93px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#E7E5E5",
      borderRadius: "12px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
});
