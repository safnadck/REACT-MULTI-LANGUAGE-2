import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import the i18n configuration file
import LanguageSwitcher from './Components/LanguageSwitcher';

import './App.css'

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="app">
      <header className="app-header">
        <img src={`./src/Assets/git.jpg`} className="app-logo" alt="logo" />
        <h1>{t('title')}</h1>
        <LanguageSwitcher />
      </header>
      <main className="app-content">
        <p>{t('description')}</p>
        <button>{t('button')}</button>
      </main>
      <footer className="app-footer">
        <a href="contact.html">{t('contact')}</a>
        <p>&copy; multi language</p>
      </footer>
    </div>
  );
};

export default App;
