import React from "react";

type props = {
  choice: string;
  handleClick: () => void;
  choised: string | null;
};

export default function ChoiceButton({ choice, handleClick, choised }: props) {
  return (
    <button
      className={`w-32 h-32 bg-slate-400 rounded-full flex items-center justify-center text-5xl transition-all duration-300 ${
        choised == choice
          ? "bg-slate-600 -translate-y-10"
          : "hover:-translate-y-10"
      }`}
      onClick={handleClick}
    >
      {choice}
    </button>
  );
}
