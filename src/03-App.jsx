import { Route, Routes, useParams, NavLink } from 'react-router-dom';

const Project = () => {
  const params = useParams();
  const { project_id } = params;
  return <h2>We are in {project_id}</h2>;
};

const Portfolio = () => {
  return (
    <div>
      <h1>Hola</h1>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? ' activated' : '')}
            end
            to={`/portfolio/project-1`}
          >
            Project 1
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to={`/portfolio/project-2`}
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
          >
            Project 2
          </NavLink>
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
            <NavLink end to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink end to="/portfolio">
              Portfolio
            </NavLink>
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
