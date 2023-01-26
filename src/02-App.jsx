import { Route, Link, Routes, useParams } from 'react-router-dom';

const Project = () => {
  const params = useParams();
  const { project_id } = params;
  console.log({ params });

  return <h2>Project {project_id}</h2>;
};

const Portfolio = () => {
  return (
    <div>
      <h1>Hola</h1>
      <ul>
        <li>
          <Link to={`/portfolio/project-1`}>Project 1</Link>
        </li>
        <li>
          <Link to={`/portfolio/project-2`}>Project 2</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path=":project_id" element={<Project />} />
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
