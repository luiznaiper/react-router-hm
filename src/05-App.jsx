import {
  Route,
  Routes,
  NavLink,
  Navigate,
  useNavigate,
} from 'react-router-dom';

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
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const forward = () => {
    navigate(1);
  };

  const push = () => {
    navigate('/chancho');
  };

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
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
        <button onClick={push}>Push</button>
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
