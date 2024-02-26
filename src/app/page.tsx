"use client";

import FadeInOut from "./../components/FadeInOut";
import { useState } from "react";

export default function Home() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        className="bg-gray-900 py-2 px-4 rounded-[8px]"
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        toggle
      </button>

      <FadeInOut
        duration={300}
        isShow={isShow}
        classes="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(100,100,100,0.5)]"
        handleClick={() => setIsShow(false)}
      />
    </div>
  );
}
