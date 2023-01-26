import { Route, Routes, Link, useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Portfolio = () => {
  return (
    <>
      <h1>I am the Portfolio</h1>
    </>
  );
};

function App() {
  const query = useQuery();
  const chancho = query.get('chanchito');
  const nombre = query.get('nombre');
  console.log({ chancho, nombre });

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<h1>Inicio {chancho}</h1>} />
          <Route path="/portfolio/*" element={<Portfolio />} />
          <Route path="/profile/" element={<h1>Perfil</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
