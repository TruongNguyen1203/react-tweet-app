import { useEffect, Fragment } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { LoadingBar } from "react-redux-loading-bar";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav></Nav>
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />}></Route>
            <Route path="/tweet/:id" exact element={<TweetPage />}></Route>
            <Route path="/new" exact element={<NewTweet />}></Route>
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProp = ({ authedUser, loadingBar }) => ({
  loading: authedUser === null,
  loadingBar,
});
export default connect(mapStateToProp)(App);
