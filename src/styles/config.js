export const COLORS = {
  BG: "#1d1f26",
  TEXT: "#c2c2cc",
  BORDER: "#464c56",
  PINK: "violet",
  RED: "#f55f91",
  ORANGE: "darkorange",
  LIGHTORANGE: "orange",
  YELLOW: "yellow",
  GREEN: "#00ff00",
  LIGHTBLUE: "#30cbd8",
  BLUE: "deepskyblue",
  MINT: "mediumspringgreen",
  NAVY: "#8e8df5",
  PURPLE: "#c081f6",
  ERROR: "#fa5252",
  UNIQUE: "#7950f2",
};

export const switchColor = (color) => {
  let realColor = "";
  switch (color) {
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
    case "lightBlue":
      realColor = COLORS.LIGHTBLUE;
      break;
    case "blue":
      realColor = COLORS.BLUE;
      break;
    case "mint":
      realColor = COLORS.MINT;
      break;
    case "navy":
      realColor = COLORS.NAVY;
      break;
    case "purple":
      realColor = COLORS.PURPLE;
      break;
    case "white":
    default:
      realColor = COLORS.TEXT;
      break;
  }
  return realColor;
};
