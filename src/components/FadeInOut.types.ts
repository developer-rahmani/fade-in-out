import React from "react";

export type PropsType = {
  isShow: boolean;
  duration: number;
  handleClick?: () => void;
  classes: string;
  children?: React.ReactNode;
};
