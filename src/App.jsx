import { Fragment, createContext, useState } from 'react'
import Home from './pages/Home'

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Fragment>
        <Home />
      </Fragment>
    </ThemeContext.Provider>
  )
}

export default App
