import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <h1>Hello Vite + React</h1>
            <Outlet />
        </>
    );
}

export default App;
