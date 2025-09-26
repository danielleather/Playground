import './App.css';
import '@pigment-css/react/styles.css';
import { IntlProvider, localeMap } from './context/intl';
import { Layout } from './components/Layout';
import { useParams } from 'react-router';
import { DEFAULT_LOCALE } from './helpers/constants';
import type { Language } from './helpers/types';
import Landing from './components/Landing';
import { ContrastProvider } from './context/contrast';

function App() {
  const params = useParams();
  
  const locale = params.locale && params.locale in localeMap ? params.locale : DEFAULT_LOCALE;
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
