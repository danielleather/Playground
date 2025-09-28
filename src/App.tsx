import './App.css';
import '@pigment-css/react/styles.css';
import { IntlProvider, localeMap } from './context/intl';
import { Layout } from './components/Layout';
import { useParams } from 'react-router';
import { DEFAULT_LOCALE } from './helpers/constants';
import type { Language } from './helpers/types';
import Landing from './components/Landing/Landing';
import { ContrastProvider } from './context/contrast';
import { Navigate } from 'react-router';

function App() {
  const params = useParams();

  const locale = params.locale;

  if (!locale || params.locale && !(params.locale in localeMap)) {
    return (<Navigate to={`/${DEFAULT_LOCALE}`} />)
  }
  
  return (
    <IntlProvider locale={locale as Language}>
      <ContrastProvider>
        <Layout>
          <Landing />
        </Layout>
      </ContrastProvider>
    </IntlProvider>
  )
}

export default App
