import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
