import logo from './logo.svg';
import './styles/App.css';
import './styles/StylesToBeTranslated.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import CreateNom from './pages/CreateNomination';
import Reason from './pages/Reason';
import NoPage from './pages/NoPage';
import theme from './styles/theme';
import Header from './components/Header';

function App() {
  return (
    <div className="h-screen bg-blue-500">
      <Header />
      <h2>The different pages will go here</h2>
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
    </div>
  );
}

export default App;
