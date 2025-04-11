import './App.css';
import '@pigment-css/react/styles.css';
import { css } from '@pigment-css/react';

function App() {
  const headerStyles = css({
    color: '#717171'
  });
  return (
    <>
      <h1 className={headerStyles}>Playground: A compliation of technologies that I'm familiar with/interested in</h1>
    </>
  )
}

export default App
