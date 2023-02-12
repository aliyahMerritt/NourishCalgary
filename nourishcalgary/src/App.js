import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import React from "react";
import AboutPage from "./components/AboutPage";
import "./App.css";

export default function App() {
    return (
        <div className="overflow-hidden scroll">
            <HomePage />
            {/* <NavBar /> */}
            <AboutPage />
        </div>
    );
}