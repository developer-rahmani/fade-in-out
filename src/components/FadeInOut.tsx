"use client";

// !! Types
import { PropsType } from "./FadeInOut.types";

// !! Hooks
import React, { CSSProperties, useEffect, useState } from "react";

const FadeInOut = ({
  classes,
  duration,
  isShow,
  handleClick,
  children,
}: PropsType) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [styles, setStyles] = useState<CSSProperties>({
    opacity: 0,
  });

  const handleMount = () => {
    setStyles({
      opacity: 1,
      transition: `opacity ${duration}ms linear`,
    });
  };

  const handleUnMount = () => {
    setStyles({
      opacity: 0,
      transition: `opacity ${duration}ms linear`,
    });
  };

  const handleTransitionEnd = () => {
    if (!isShow) {
      setIsMounted(false);
    }
  };

  useEffect(() => {
    if (isShow === isMounted) return;

    if (isShow) {
      setIsMounted(true);
      setTimeout(() => {
        handleMount();
      }, 50);
    } else {
      setTimeout(() => {
        handleUnMount();
      }, 0);
    }
  }, [isShow, isMounted]);

  return (
    isMounted && (
      <div
        className={classes}
        style={styles}
        onClick={handleClick}
        onTransitionEnd={handleTransitionEnd}
      >
        {children}
      </div>
    )
  );
};

export default FadeInOut;
