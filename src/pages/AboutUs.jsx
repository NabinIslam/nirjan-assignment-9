const AboutUs = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At <span className="font-semibold">Lingo Bingo</span>, our mission is
          to make language learning accessible, engaging, and effective for
          learners of all ages. We strive to bridge cultural gaps and empower
          individuals to communicate confidently in a globalized world.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We envision a world where language is no longer a barrier but a
          gateway to new opportunities, friendships, and experiences. Through
          innovative technology and personalized learning paths, we aim to
          revolutionize the way people learn languages.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example Team Member */}
          <div className="bg-white border shadow-md rounded-lg p-6 text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPoQmFUALSUq3AYU61izdbkR3sUV3KMbjsw&s"
              alt="Team Member"
            />
            <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>Empowerment through Education</li>
          <li>Inclusivity and Diversity</li>
          <li>Commitment to Innovation</li>
          <li>Customer-Centric Approach</li>
        </ul>
      </section>
    </main>
  );
};

export default AboutUs;
