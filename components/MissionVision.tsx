import Image from 'next/image';

export default function MissionVision() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-200">Our Mission & Vision</h1>
  <p className="mt-4 text-lg text-gray-300">
    Discover how SJS Freelancing & IT Institute is shaping the future of IT solutions with our mission and vision.
  </p>
</div>
      <div className="py-12 md:py-20 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Mission */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-4">
            <div className="bg-gray-800 p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At SJS Freelancing & IT Institute, our mission is to provide innovative and reliable IT solutions that empower businesses to thrive in the digital world. We are committed to delivering exceptional services and fostering long-term partnerships with our clients.
              </p>
            </div>
          </div>
          {/* Vision */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-800 p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our vision at SJS Freelancing & IT Institute is to be a leading IT company recognized for our innovative solutions, exceptional customer service, and commitment to excellence. We strive to contribute to the success of our clients by leveraging cutting-edge technologies and fostering a culture of creativity and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
