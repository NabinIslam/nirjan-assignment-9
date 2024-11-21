const AboutUs = () => {
  return (
    <section className="py-[50px] animate__fadeInRight">
      <div className="container">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-center mb-8">
          Welcome to{" "}
          <span className="font-semibold text-blue-500">Lingo Bingo</span>, your
          ultimate destination for mastering new languages. Whether you're a
          beginner or an advanced learner, we provide tailored tools and
          resources to make your language learning journey engaging and
          effective.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg text-center border">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Interactive Lessons
            </h3>
            <p className="text-gray-600">
              Explore a variety of interactive lessons designed to enhance your
              speaking, listening, and writing skills.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center border">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Gamified Learning
            </h3>
            <p className="text-gray-600">
              Make learning fun with our gamified approach that keeps you
              motivated through challenges and rewards.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center border">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Global Community
            </h3>
            <p className="text-gray-600">
              Join a vibrant community of learners and practice languages with
              peers from around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
