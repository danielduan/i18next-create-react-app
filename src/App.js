import React from 'react';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>
        <Trans i18nKey="header.welcome">Welcome!</Trans>
      </h1>
      <p>
        {t('home.quantity_display', 'You have 2 apples.')}
      </p>
    </div>
  );
}

export default App;
