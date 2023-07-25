import React from "react";
import NotesListPage from "./pages/NotesListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotePage from "./pages/NotePage";
import HomePage from "./components/HomePage";
import ButtonAppBar from "./components/ButtonAppBar";
import Lobby from "./components/lobby";

function App() {
  return (
    <Router>
      <ButtonAppBar />
      <div className="container dark">
        <React.Fragment>
          <Routes>
            <Route path="/notes" element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </React.Fragment>
        <React.Fragment>
          <Routes>
            <Route path="/vcall" element={<Lobby />} />
            <Route path="/" exact element={<HomePage />} />
          </Routes>
        </React.Fragment>
      </div>
    </Router>
  );
}

export default App;
