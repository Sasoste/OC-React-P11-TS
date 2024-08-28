import './App.scss';
import Layout from './components/layout';
import ErrorPage from './pages/error';
import Housing from './pages/housing';
import About from './pages/about';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogementProvider from './provider/LogementsProvider';

const App = () => {
  return (
    <Router>
      <LogementProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </LogementProvider>
    </Router>
  );
};

export default App;