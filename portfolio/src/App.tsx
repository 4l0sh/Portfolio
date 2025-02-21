import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './layout/mainPage/mainPage';
import StartMenu from './layout/components/start/startMenu';
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/start' element={<StartMenu />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
