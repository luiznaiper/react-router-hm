import { Route, Routes, NavLink, Navigate } from 'react-router-dom';

const Portfolio = () => {
  const loggedIn = false;
  if (!loggedIn) {
    return <Navigate push to="/" />;
  }
  return (
    <>
      <h1>I am the Portfolio</h1>
    </>
  );
};

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink end to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink end to="/profile">
              Profile
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
          <Route path="/home" element={<h1>Inicio</h1>} />
          <Route path="/portfolio/*" element={<Portfolio />} />
          <Route path="/profile/" element={<h1>Perfil</h1>} />
          <Route
            exact
            path="/"
            element={<Navigate replace to="/home" />}
          ></Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
