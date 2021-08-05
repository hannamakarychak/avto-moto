import { Fragment } from "react";
import "./App.css";
import Details from "./components/details/details";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Details />
    </Fragment>
  );
}

export default App;
