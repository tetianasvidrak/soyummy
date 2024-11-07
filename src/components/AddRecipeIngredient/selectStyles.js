export const customStylesIngredients = {
  // Reset styles for the control component
  control: (provided, state) => ({
    ...provided,
    fontSize: "18px",
    border: "none",
    boxShadow: "none",
    backgroundColor: "#F5F5F5",
    height: "59px",
    cursor: "pointer",
    "&:hover": {
      border: "none",
      boxShadow: "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#8BAA36" : "white", // Set background color when option is selected
    borderRadius: "8px", // Set border radius
    "&:hover": {
      backgroundColor: "#E2E8F0", // Set background color on hover
    },
  }),
  // menu: (provided) => ({
  //   ...provided,
  //   maxHeight: "162px",
  //   // Set maximum height for the dropdown menu
  //   overflowY: "auto", // Enable vertical scrolling
  //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  // }),
  menu: (provided) => ({
    ...provided,
    maxHeight: "162px",
    fontSize: "14px",
    // Set maximum height for the dropdown menu
    overflowY: "auto", // Enable vertical scrolling
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }),
  menuList: (base) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "4px",
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
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none", // Hide the indicator separator
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.selectProps.menuIsOpen ? "#8BAA36" : "black",
    "&:hover": {
      color: "#8BAA36", // Set hover color
    },
  }),
};
