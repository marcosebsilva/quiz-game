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
import LinkToArticle from './components/LinkToArticle';

function App() {
  return (
    <>
      <Contacts />
      <LinkToArticle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Settings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/question/:id" element={<Question />} />
      </Routes>
      <Footer>Made by Marcos Silva</Footer>
    </>
  );
}

export default App;
