"use client";

import FadeInOut from "./../components/FadeInOut";
import { useState } from "react";

export default function Home() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <button
        className="bg-gray-900 py-2 px-4 rounded-[8px] text-gray-200 mt-4"
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
