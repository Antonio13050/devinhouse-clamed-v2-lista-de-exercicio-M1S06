import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Exercicio1 from "./routes/Exercicio1";
import Exercicio2 from "./routes/Exercicio2";
import Exercicio3 from "./routes/Exercicio3";
import Exercicio4 from "./routes/Exercicio4";
import Exercicio5 from "./routes/Exercicio5";

import Home from "./routes/Home";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/exercicio1">
                        <Exercicio1 />
                    </Route>
                    <Route path="/exercicio1">
                        <Exercicio1 />
                    </Route>
                    <Route path="/exercicio2">
                        <Exercicio2 />
                    </Route>
                    <Route path="/exercicio3">
                        <Exercicio3 />
                    </Route>
                    <Route path="/exercicio4">
                        <Exercicio4 />
                    </Route>
                    <Route path="/exercicio5">
                        <Exercicio5 />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
