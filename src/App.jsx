import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header />
            <h1 className="mt-5">Hello Vite + React</h1>
            <Outlet />
        </>
    );
}

export default App;
