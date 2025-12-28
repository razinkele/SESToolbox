import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './features/home/Home';
import SESModeling from './features/modeling/SESModeling';
import DataVisualization from './features/visualization/DataVisualization';
import About from './features/about/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="modeling" element={<SESModeling />} />
        <Route path="visualization" element={<DataVisualization />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
