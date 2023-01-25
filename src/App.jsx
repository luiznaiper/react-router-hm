import { Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/portfolio" element={<h1>Portfolio</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
