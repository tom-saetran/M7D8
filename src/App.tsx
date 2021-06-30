import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import Search from "./components/Search"

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <div className="App">
                        <header className="App-header">
                            <Route exact path="/" render={routeProps => <Search {...routeProps} />} />
                        </header>
                    </div>
                </Switch>
            </Router>
        )
    }
}

export default App
