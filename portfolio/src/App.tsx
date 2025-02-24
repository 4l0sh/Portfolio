import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './layout/mainPage/mainPage';
import StartMenu from './layout/components/start/startMenu';
import Startup from './layout/startup/startup';
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/mainPage' element={<MainPage />} />
          <Route path='/start' element={<StartMenu />} />
          <Route path='/' element={<Startup />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
