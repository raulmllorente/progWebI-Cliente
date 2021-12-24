import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Musica from './Musica/Musica';
import Cine from './Cine/Cine';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="musica" element={<Musica />} />
        <Route path="cine" element={<Cine />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
export default App;
