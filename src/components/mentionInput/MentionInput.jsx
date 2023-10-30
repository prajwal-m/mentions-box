/* eslint-disable react/prop-types */
import mentionsInputStyle from "./mentionsInputStyle";
import mentionStyle from "./mentionStyle";
import { Mention, MentionsInput } from "react-mentions";
import { useState } from "react";

const MentionInput = ({ suggestionList, onChangeCb }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
    onChangeCb && onChangeCb(event.target.value);
  };

  return (
    <div>
      <MentionsInput
        placeholder="Add Comment. Use '@' for mention"
        value={value}
        onChange={handleInputChange}
        style={mentionsInputStyle}
      >
        <Mention style={mentionStyle} data={suggestionList} />
      </MentionsInput>
    </div>
  );
};

export default MentionInput;
