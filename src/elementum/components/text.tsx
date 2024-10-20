import { FC } from "react";
import { Color } from "../style/colors";

interface TextProps {
  color?: Color;
  size?: string;
  weight?: number;
  children?: string;
}

export const Text: FC<TextProps> = (props) => {
  const style = {
    color: props.color,
  };

  return <p style={style}>{props.children}</p>;
};
