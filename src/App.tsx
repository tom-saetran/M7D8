import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import Search from "./components/Search"

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={routeProps => <Search {...routeProps} />} />
                </Switch>
            </Router>
        )
    }
}

export default App
