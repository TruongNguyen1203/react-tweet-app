import { _saveLikeToggle, _saveTweet } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

function toogleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  };
}

export function handleToggleTweet(info) {
  return (dispatch) => {
    dispatch(toogleTweet(info));
    return _saveLikeToggle(info).catch((e) => {
      console.warn("Error handleToggleTweet: ", e);
      dispatch(toogleTweet(info));
      alert("There was an error liking the tweet. Try again");
    });
  };
}

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet,
  };
}

export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    const { authedUser } = getState();
    return _saveTweet({
      text,
      author: authedUser,
      replyingTo,
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(hideLoading());
  };
}
