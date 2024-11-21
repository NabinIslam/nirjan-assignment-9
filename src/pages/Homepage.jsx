import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Success from "../components/Success";
import { Helmet } from "react-helmet-async";

const Homepage = () => {
  return (
    <main>
      <Helmet>
        <title>Lingo Bingo</title>
      </Helmet>
      <Hero />
      <AboutUs />
      <Success />
    </main>
  );
};

export default Homepage;
