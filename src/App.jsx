/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import MentionInput from "./components/mentionInput/MentionInput";

function App() {
  // setting state with the input value for further use.
  const [inputValue, setInputValue] = useState("");

  const users = [
    {
      id: "isaac",
      display: "Isaac Newton",
    },
    {
      id: "albert",
      display: "Albert Einstein",
    },
    {
      id: "elon",
      display: "Elon Musk",
    },
    {
      id: "steve",
      display: "Steve Jobs",
    },
    {
      id: "mark",
      display: "Mark Zuckerberg",
    },
  ];

  const inputChangeCb = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <MentionInput suggestionList={users} onChangeCb={inputChangeCb} />
    </>
  );
}

export default App;
