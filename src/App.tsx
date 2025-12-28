import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './features/home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Additional routes will be added here */}
      </Route>
    </Routes>
  );
}

export default App;
