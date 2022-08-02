import React from "react";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import SendPage from "./SendPage";
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
    return <Router>
        <Header />
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route exact path="/search">
            <SearchPage />
        </Route>
        <Route exact path="/send">
            <SendPage />
        </Route>
        <Footer />
    </Router>
}

export default App;