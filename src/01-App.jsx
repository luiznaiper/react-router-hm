import { Route, Link, Routes } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <h1>Hola</h1>
      <ul>
        <li>
          <Link to={'/portfolio/project1'}>Project 1</Link>
        </li>
        <li>
          <Link to={'/portfolio/project2'}>Project 2</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="/project1" element={<h1>Project 1</h1>} />
          <Route path="/project2" element={<h1>Project 2</h1>} />
        </Routes>
      </div>
    </div>
  );
};

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
          <Route path="/portfolio/*" element={<Portfolio />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
