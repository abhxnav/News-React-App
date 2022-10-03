import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, News } from "./components/components-index";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 12;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <Router>
        <div className="app" style={{backgroundColor: "rgb(20,20,20)"}}>
        <LoadingBar
          height={3}
          color="#f11946"
          progress={this.state.progress}
          style={{ backgroundColor: "black" }}
        />
        <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={this.pageSize}
                  key="entertainment"
                  country="in"
                  category="entertainment"
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
