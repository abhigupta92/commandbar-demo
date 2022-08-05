import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// index.js
import { init } from 'commandbar';
import {
  initCarsCommand,
  initCommandbar,
  initUserCommand,
} from './commandbarUtils';
import { Route, Routes } from 'react-router-dom';
init('7aa549dd');

function App() {
  useEffect(() => {
    const loggedInUserId = '12345'; // example
    initCommandbar(loggedInUserId, () => {
      window.CommandBar.addCommand({
        name: 'Navigate To Home',
        text: 'Navigate To Home',
        template: { type: 'link', value: '/', operation: 'blank' },
      });
    });
    initUserCommand();
    initCarsCommand();

    return () => {
      window.CommandBar.shutdown();
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='user' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
