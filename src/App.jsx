// import { gql, useQuery } from "@apollo/client";
// import { useEffect } from "react";
// const GET_FILM = gql`
//   {
//     allFilms {
//       films {
//         title
//       }
//     }
//   }
// `;

// function App() {
//   const { loading, error, data } = useQuery(GET_FILM);

//   useEffect(() => {
//     console.log(data, error, loading);
//   });
//   return (
//     <>
//       <div className="">
//         <h1 className="text-4xl text-blue-400">List Movie</h1>
//         {loading && <p>Loading...</p>}
//         <ul>
//           {data?.allFilms?.films.map((film, index) => (
//             <li key={index}>{film.title}</li>
//           ))}
//         </ul>
//         {error && <p>Error: {error.message}</p>}
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import ChoiceButton from "./folder/ui/ChoiceButton";
import ChoicheLabel from "./folder/ui/ChoicheLabel";

export default function App() {
  const [yourChoice, setyourChoice] = useState(null);
  const [computerChoice, setcomputerChoice] = useState(null);
  const [winner, setwinner] = useState(null);

  const handleChoice = (choice) => {
    setyourChoice(choice);
    const choices = ["✊", "🖐", "✌️"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setcomputerChoice(randomChoice);
    if (choice === randomChoice) {
      setwinner("It's a Draw");
    } else if (
      (choice === "✊" && randomChoice === "✌️") ||
      (choice === "🖐" && randomChoice === "✊") ||
      (choice === "✌️" && randomChoice === "🖐")
    ) {
      setwinner("You Win");
    } else {
      setwinner("You Lose");
    }
  };

  return (
    <main className="w-full bg-slate-800 py-20 flex flex-col gap-20">
      <div className="w-full flex justify-center flex-col gap-10 items-center">
        <h1 className="text-4xl text-white font-semibold">
          Paper Rock Scissors Game
        </h1>
        <ChoicheLabel label="Computer Choice" />
        <div className="w-32 h-32 bg-slate-400 rounded-full flex justify-center items-center text-5xl">
          {computerChoice ? computerChoice : "🤖"}
        </div>
      </div>
      <h2 className="text-center text-2xl font-semibold text-white">
        {winner ? winner : "The Winner Is ...."}
      </h2>
      <div className="flex flex-col w-full justify-center items-center gap-10">
        <ChoicheLabel label="Your Choice" />
        <div className="flex w-full justify-center items-center gap-10">
          <ChoiceButton
            choice="✊"
            handleClick={() => handleChoice("✊")}
            choosed={yourChoice}
          />
          <ChoiceButton
            choice="🖐"
            handleClick={() => handleChoice("🖐")}
            choosed={yourChoice}
          />
          <ChoiceButton
            choice="✌️"
            handleClick={() => handleChoice("✌️")}
            choosed={yourChoice}
          />
        </div>
      </div>
    </main>
  );
}
