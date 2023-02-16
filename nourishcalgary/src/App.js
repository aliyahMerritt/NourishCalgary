import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import React from "react";
import AboutPage from "./components/AboutPage";
import "./App.css";
import Map from "./components/MapStyling";
import NourishMap from "./components/NourishMap";
import HowCanIHelp from "./components/HowCanIHelp";

export default function App() {
    return (
        <div className="overflow-hidden">
            <HomePage />
            <AboutPage />
            <Map />
            <NourishMap />
            <HowCanIHelp />
        </div>
    );
}