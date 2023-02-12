import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import React from "react";

export default function App() {
    return (
        <div className="App no-scrollbar">
            <HomePage />
            {/* <NavBar /> */}
        </div>
    );
}