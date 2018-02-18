import React from "react"
import { Route } from "react-router-dom"

import Home from "./pages/Home"
import Posts from "./pages/Posts"
import Post from "./pages/Post"
import Topics from "./pages/Topics"
import Topic from "./pages/Topic"

import Register from "./pages/Register"
import Login from "./pages/Login"
import New from "./pages/New"
import Profile from "./pages/Profile"
import Setting from "./pages/Setting"

const App = () => (
  <div id="App" className="routes">
    <Route exact path={`/`} component={Home} />
    <Route path={`/posts`} component={Posts} />
    <Route path={`/topics`} component={Topics} />

    <Route path={`/p/:id`} component={Post} />
    <Route path={`/t/:id`} component={Topic} />

    <Route path={`/register`} component={Register} />
    <Route path={`/login`} component={Login} />
    <Route path={`/new`} component={New} />
    <Route exact path={`/profile`} component={Profile} />
    <Route path={`/profile/:username`} component={Profile} />
    <Route path={`/setting`} component={Setting} />
  </div>
)

export default App
