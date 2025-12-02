"use client";

import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function UpDown() {
  const [up, setUp] = useState(false);

  const handleButton = () => {
    setUp(!up);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={handleButton}
        className="
          fixed bottom-6 right-6 bg-rose-800 text-white p-4 rounded-full shadow-xl hover:bg-rose-900 hover:scale-110 transition-all duration-300 flex items-center justify-center "
      >
        <FaArrowUp size={20} />
      </button>
    </>
  );
}
