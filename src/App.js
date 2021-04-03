import GlobalStyle from '../src/styles/GlobalStyles';
import { MainPage } from './pages/mainPage';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';


function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <MainPage />
      </ThemeProvider>
    </>
  )
}

export default App;
