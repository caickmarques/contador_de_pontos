import GlobalStyle from '../src/styles/GlobalStyles';
import { MainHeader } from '../src/components/MainHeader';
import { Content } from '../src/components/Content';
import { Footer } from './components/Footer';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';


function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <MainHeader />
        <Content />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App;
