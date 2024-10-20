import { FC, ReactNode } from "react";
import { Color } from "../style/colors";
import { Alignment, Direction } from "../enums/layout";
import { Cursor } from "../enums/utils";

interface ContainerProps {
  w?: string;
  h?: string;
  color?: Color;
  round?: string;
  cursor?: Cursor;
  onClick?: () => void;
  children?: ReactNode;
}

interface FlexContainerProps extends ContainerProps {
  justify?: Alignment;
  items?: Alignment;
  direction?: Direction;
  gapX?: string;
  gapY?: string;
}

const getStyles = (props: ContainerProps) => {
  return {
    width: props.w,
    height: props.h,
    backgroundColor: props.color,
    borderRadius: `${props.round}`,
    cursor: props.cursor,
  };
};

const getContainerAtrributes = (props: ContainerProps) => {
  return {
    onClick: props.onClick,
  };
};

export const Container: FC<ContainerProps> = (props) => {
  const style = getStyles(props);

  return (
    <div style={style} {...getContainerAtrributes(props)}>
      {props.children}
    </div>
  );
};

export const FlexContainer: FC<FlexContainerProps> = (props) => {
  const style = {
    ...getStyles(props),
    display: "flex",
    justifyContent: props.justify,
    alignItems: props.items,
    flexDirection: props.direction,
    gap: `${props.gapY || "0px"} ${props.gapX || "0px"}`,
  };

  return (
    <div style={style} {...getContainerAtrributes(props)}>
      {props.children}
    </div>
  );
};
