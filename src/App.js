import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";
import UsersContainer from './components/Content/Users/usersContainer'

function App() {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Route path="/messages" render={() => (
              <MessagesContainer />
            )}
          />
          <Route path='/profile/:userId?' render={() => (
              <ProfileContainer />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={() => (
              <UsersContainer />
            )} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
