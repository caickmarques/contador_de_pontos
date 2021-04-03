import GlobalStyle from '../src/styles/GlobalStyles';
import { MainHeader } from '../src/components/MainHeader';
import { Content } from '../src/components/Content';
import { Footer } from './components/Footer';
function App() {
  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <Content />
      <Footer />
    </>
  )
}

export default App;
