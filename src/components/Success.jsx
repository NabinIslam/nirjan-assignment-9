import CountUp from "react-countup";

const Success = () => {
  return (
    <section className="py-[50px]">
      <div className="container">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="border basis-[25%] text-center p-10 rounded-xl shadow-md space-y-3">
            <h4 className="text-3xl font-bold">Users</h4>
            <h5>
              <CountUp className="text-2xl" duration={5} end={100000} />
            </h5>
          </div>
          <div className="border basis-[25%] text-center p-10 rounded-xl shadow-md space-y-3">
            <h4 className="text-3xl font-bold">Lessons</h4>
            <h5>
              <CountUp className="text-2xl" duration={5} end={1000} />
            </h5>
          </div>
          <div className="border basis-[25%] text-center p-10 rounded-xl shadow-md space-y-3">
            <h4 className="text-3xl font-bold">Vocabulary</h4>
            <h5>
              <CountUp className="text-2xl" duration={5} end={20000} />
            </h5>
          </div>
          <div className="border basis-[25%] text-center p-10 rounded-xl shadow-md space-y-3">
            <h4 className="text-3xl font-bold">Tutorials</h4>
            <h5>
              <CountUp className="text-2xl" duration={5} end={15000} />
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
