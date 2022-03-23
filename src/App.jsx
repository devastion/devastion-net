import "sass-reset";
import "./App.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";

function AnimatedRouter() {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={1000}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="articles" element={<Articles />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />
        <AnimatedRouter />
      </BrowserRouter>
    </div>
  );
}
