import React from "react";
import Navbar from "./Component/Navbar";
import MainSection from "./Component/MainSection";
import Main from "./Component/main";
import { Switch, Route, Redirect } from "react-router-dom";
import Information from "./pages/information";
import Help from "./pages/help";

const lang = [
  {
    name: "English",
    flag:
      "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png",
  },
  {
    name: "Dutch",
    flag:
      "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png",
  },
  {
    name: "Danish",
    flag:
      "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png",
  },
  {
    name: "Swedish",
    flag:
      "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png",
  },
  {
    name: "German",
    flag:
      "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png",
  },
];
class App extends React.Component {
  state = {
    selected_language: "English",
  };

  set_lang = (lang) => {
    this.setState({ selected_language: lang });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid wrapper p-0">
          <Navbar  selected_language={this.state.selected_language} set_language={this.set_lang} all_languages={lang} />
          <Switch>
            <Route path="/information" component={()=><Information selected_language={this.state.selected_language}/>} />
            <Route path="/help" component={()=><Help selected_language={this.state.selected_language}/>} />
            <Route path="/" component={()=><Main selected_language={this.state.selected_language} set_language={this.set_lang} all_languages={lang} />} />
          </Switch>
          {/* <Main/> */}
          {/* <MainSection /> */}
        </div>
      </React.Fragment>
    );
  }
}
export default App;
