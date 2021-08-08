import { Fragment } from "react";
import Details from "./components/details/details";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Details />
      <Footer />
    </Fragment>
  );
}

export default App;
