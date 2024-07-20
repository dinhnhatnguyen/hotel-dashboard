import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import Card from "./components/Card";
function App() {
  return (
    <Routes>
      <Route path="/create" element={<Create />} />
      <Route path="/hotels/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Card />} />

      {/* <Route path="/destinations" element={<Destinations />} />
      <Route path="/react-query" element={<ReactQueryDestinations />} />
      <Route path="/search" element={<Search />} /> */}
    </Routes>
  );
}

export default App;
