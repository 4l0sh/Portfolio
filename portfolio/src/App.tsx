import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './layout/mainPage/mainPage';
import Startup from './layout/startup/startup';
import Shutdown from './layout/shutdown/shutdown';
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/mainPage' element={<MainPage />} />
          <Route path='/shutdown' element={<Shutdown />} />
          <Route path='/' element={<Startup />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
