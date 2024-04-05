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
    {
      id: "charlie",
      display: "Charles Babbage",
    },
    {
      id: "test3",
      display: "Test User 3",
    },
    {
      id: "test4",
      display: "Test User 4",
    },
    {
      id: "test5",
      display: "Test User 5",
    },
     {
      id: "test7",
      display: "Test User 7",
    },
      {
      id: "test9",
      display: "Test User 9",
    },
  ];

  const inputChangeCb = (value) => {
    setInputValue(value);
  };

  return (
    <div>
      <h1>Mention Box</h1>
      <p>Use @ to trigger mentions</p>
      <MentionInput suggestionList={users} onChangeCb={inputChangeCb} />
    </div>
  );
}

export default App;
