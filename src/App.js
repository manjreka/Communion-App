import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import EventsPage from "./Components/EventsPage";
import EventDetails from "./Components/EventDetails";
import CreateEvents from "./Components/CreateEvents";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/events" element={<EventsPage />} />
        <Route exact path="/eventDetails/:id" element={<EventDetails />} />
        <Route exact path="/createEvent" element={<CreateEvents />} />
      </Routes>
    </div>
  );
};

export default App;
