import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Exercicio1 from "./routes/Exercicio1.jsx";
import Exercicio2 from "./routes/Exercicio2.jsx";
import Exercicio3 from "./routes/Exercicio3.jsx";
import Exercicio4 from "./routes/Exercicio4.jsx";
import Exercicio5 from "./routes/Exercicio5.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/exercicio1",
                element: <Exercicio1 />,
            },
            {
                path: "exercicio2",
                element: <Exercicio2 />,
            },
            {
                path: "exercicio3",
                element: <Exercicio3 />,
            },
            {
                path: "exercicio4",
                element: <Exercicio4 />,
            },
            {
                path: "exercicio5",
                element: <Exercicio5 />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
