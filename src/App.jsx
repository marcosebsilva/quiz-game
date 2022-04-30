import './App.css';
import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Question from './pages/Question';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
// import LinkToArticle from './components/LinkToArticle';
import MyScore from './pages/MyScore';
import Ranking from './pages/Ranking';

function App() {
  return (
    <>
      <Contacts />
      {/* <LinkToArticle /> */}
      <Routes>
        <Route path="/quiz-game">
          <Route index element={<Home />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="settings" element={<Settings />} />
          <Route path="question/:id" element={<Question />} />
          <Route path="my-score" element={<MyScore />} />
        </Route>
      </Routes>
      <Footer>Made by Marcos Silva</Footer>
    </>
  );
}

export default App;
