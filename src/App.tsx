import './App.css';
import '@pigment-css/react/styles.css';
import { IntlProvider } from './context/intl';
import Header from './components/Header';

function App() {
  return (
    <IntlProvider locale="fr-ca">
      <Header />
    </IntlProvider>
  )
}

export default App
