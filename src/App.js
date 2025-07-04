import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DSA from './pages/DSA';
import MongoDB from './pages/MongoDB';
import TodoAppPage from './pages/TodoAppPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/mongodb" element={<MongoDB />} />
          <Route path="/todo" element={<TodoAppPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;