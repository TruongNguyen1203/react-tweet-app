import { useState } from "react";
import { handleAddTweet } from "../actions/tweets";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewTweet = ({ dispatch, id }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddTweet(text, id));
    setText("")
    if (!id) {
      navigate("/");
    }

  };

  const tweetsLeft = 280 - text.length;
  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          placeholder="What is happening?"
          className="textarea"
          maxLength={280}
          value={text}
          onChange={handleChange}
        ></textarea>
        {tweetsLeft <= 100 && <div className="tweet-length">{tweetsLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewTweet);
