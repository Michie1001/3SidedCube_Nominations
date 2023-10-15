import logo from './logo.svg';
import banner from './images/banner.png';
import './styles/App.css';
import './styles/StylesToBeTranslated.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Intro from './pages/Intro';
import CreateNom from './pages/CreateNomination';
import Reason from './pages/Reason';
import NoPage from './pages/NoPage';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="h-screen bg-blue-500">
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className="bg-img h-screen w-screen">
          <img src={banner} />
        </div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Intro />} />
            <Route path='/intro' element={<Intro />} />
            <Route path='/create-nomination' element={<CreateNom />} />
            <Route path='/reason' element={<Reason />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </BrowserRouter>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactyyy
        </a>
      </header> */}
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
