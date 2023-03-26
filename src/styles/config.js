export const COLORS = {
  BG: "#1d1f26",
  BORDER: "#464c56",
  PINK: "violet",
  RED: "#f55f91",
  ORANGE: "darkorange",
  LIGHTORANGE: "orange",
  YELLOW: "yellow",
  GREEN: "#00ff00",
  BLUE: "deepskyblue",
  MINT: "mediumspringgreen",
  PURPLE: "mediumpurple",
  ERROR: "#fa5252",
  UNIQUE: "#7950f2",
};

export const switchColor = (color) => {
  let realColor = "";
  switch (color) {
    case "white":
      realColor = "white";
      break;
    case "pink":
      realColor = COLORS.PINK;
      break;
    case "red":
      realColor = COLORS.RED;
      break;
    case "orange":
      realColor = COLORS.ORANGE;
      break;
    case "lightOrange":
      realColor = COLORS.LIGHTORANGE;
      break;
    case "yellow":
      realColor = COLORS.YELLOW;
      break;
    case "green":
      realColor = COLORS.GREEN;
      break;
    case "blue":
      realColor = COLORS.BLUE;
      break;
    case "mint":
      realColor = COLORS.MINT;
      break;
    case "purple":
      realColor = COLORS.PURPLE;
      break;
    default:
      realColor = "black";
      break;
  }
  return realColor;
};
