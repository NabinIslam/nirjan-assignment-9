import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center justify-center">
        <img className="text-center" src="/hero.png" alt="Lingo Bingo" />
        <h1 className="text-4xl font-extrabold text-center mb-5">
          Lingo Bingo
        </h1>
        <p className="text-xl text-center mb-5">
          Make Language Learning a Breeze!
        </p>

        <Link to="/start-learning">
          <Button>Start Learning</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
