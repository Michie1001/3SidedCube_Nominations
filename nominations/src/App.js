import logo from './logo.svg';
import banner from './images/banner.png';
import './styles/App.css';
import './styles/StylesToBeTranslated.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import CreateNom from './pages/CreateNomination';
import Reason from './pages/Reason';
import Process from './pages/Process';
import Overview from './pages/Overview';
import Success from './pages/Success';
import Nominations from './pages/Nominations';
import NullNominations from './pages/NullNominations';
import NoPage from './pages/NoPage';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="h-screen bg-blue-500">
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
          <Route path='/process' element={<Process />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/success' element={<Success />} />
          <Route path='/nominations' element={<Nominations />} />
          <Route path='/null' element={<NullNominations />} />
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
    </div>
  );
}

export default App;
