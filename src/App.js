import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    // Accessing the API key from environment variables
    const apiKey = process.env.REACT_APP_API_NEWS;
    console.log("API Key:", apiKey);
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <div>
          <BrowserRouter>
            <NavBar />
            <LoadingBar color="#f11946" progress={this.state.progress} />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    apiKey={process.env.REACT_APP_API_NEWS}
                    setProgress={this.setProgress}
                    key="sports"
                    pageSize={20}
                    country="in"
                    category="sports"
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <News
                    apiKey={process.env.REACT_APP_API_NEWS}
                    setProgress={this.setProgress}
                    key="sports"
                    pageSize={20}
                    country="in"
                    category="sports"
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News
                    apiKey={process.env.REACT_APP_API_NEWS}
                    setProgress={this.setProgress}
                    key="business"
                    pageSize={20}
                    country="in"
                    category="business"
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    apiKey={process.env.REACT_APP_API_NEWS}
                    setProgress={this.setProgress}
                    key="entertainment"
                    pageSize={20}
                    country="in"
                    category="entertainment"
                  />
                }
              />
              <Route
                exact
                path="/general"
                element={
                  <News
                    apiKey={process.env.REACT_APP_API_NEWS}
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={20}
                    country="in"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News
                    apiKey={process.env.REACT_APP_API_NEWS}
                    setProgress={this.setProgress}
                    key="health"
                    pageSize={20}
                    country="in"
                    category="health"
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                    apiKey={process.env.REACT_APP_API_NEWS}
                    setProgress={this.setProgress}
                    key="science"
                    pageSize={20}
                    country="in"
                    category="science"
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                    apiKey={process.env.REACT_APP_API_NEWS}
                    setProgress={this.setProgress}
                    key="technology"
                    pageSize={20}
                    country="in"
                    category="technology"
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  }
}
