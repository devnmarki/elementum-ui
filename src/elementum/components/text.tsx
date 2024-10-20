import { FC } from "react";
import { Color } from "../style/colors";
import { Font } from "../style/typography";

const loadFont = (fontFamily: string, weights: string) => {
  const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
    / /g,
    "+"
  )}:wght@${weights}&display=swap`;

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = fontUrl;

  document.head.appendChild(link);
};

export const registerFont = (fontFamily: string, weights: string) => {
  const fontName = fontFamily.replace(/ /g, "+");
  if (!document.querySelector(`link[href*="${fontName}"]`)) {
    loadFont(fontFamily, weights);
  }
};

interface TextProps {
  color?: Color;
  font?: Font;
  children?: string;
}

export const Text: FC<TextProps> = (props) => {
  const style = {
    color: props.color,
    fontFamily: props.font?.font,
    fontSize: props.font?.size,
    fontWeight: props.font?.weight,
  };

  return <p style={style}>{props.children}</p>;
};
