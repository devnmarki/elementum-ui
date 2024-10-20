import { FC, ReactNode } from "react";
import { Color, Colors } from "../style/colors.ts";

interface BodyProps {
  background?: Color;
  children?: ReactNode;
}

export const Body: FC<BodyProps> = ({ background, children }) => {
  const style = {
    backgroundColor: background || Colors.gray[300],
  };

  return (
    <div className="w-screen h-screen" style={style}>
      {children}
    </div>
  );
};
