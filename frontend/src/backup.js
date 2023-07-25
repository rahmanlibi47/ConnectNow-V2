import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import Header from "./components/Header";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/notes"
          element={<NotesListPage />}
          className="app container dark"
        />
        <Route path="/note/:id" element={<NotePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
