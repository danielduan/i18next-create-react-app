import React from 'react';
import './App.css';
import { useTranslation, Trans, I18nextProvider } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    // overly simplistic way of toggling between 3 languages
    switch(i18n.language) {
      case 'en':
        i18n.changeLanguage('es');
        break;
      case 'es':
        i18n.changeLanguage('zh');
        break;
      default:
        i18n.changeLanguage('en');
        break;
    }
  }

  return (
    // language change only changes the current component and does not propagate
    // across the app without this React context provider at the root of the app
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <h1>
          <Trans i18nKey="header.welcome">Welcome!</Trans>
        </h1>
        <p>
          {t('home.quantity_display', 'You have 2 apples.')}
        </p>
        <button onClick={toggleLang}>???</button>
      </div>
    </I18nextProvider>
  );
}

export default App;
