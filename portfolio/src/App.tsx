import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './layout/mainPage/mainPage';
import Skills from './layout/folders/Skills/skills';
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
