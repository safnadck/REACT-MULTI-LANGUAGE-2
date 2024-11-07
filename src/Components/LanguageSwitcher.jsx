import React from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import './style.css'
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>
        <Flag code="GB" className="flag-icon" /> English
      </button>
      <button onClick={() => changeLanguage('es')}>
        <Flag code="ES" className="flag-icon" /> Spanish
      </button>
      <button onClick={() => changeLanguage('fr')}>
        <Flag code="FR" className="flag-icon" /> French
      </button>
      <button onClick={() => changeLanguage('de')}>
        <Flag code="DE" className="flag-icon" /> German
      </button>
    </div>
  );
};

export default LanguageSwitcher;
