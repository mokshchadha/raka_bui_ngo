const HeaderSection = () => {
    return (
      <section className="relative bg-gradient-to-b from-blue-600 to-blue-400 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10 px-4">
          <div className="mb-8 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10c0-1.105-1.343-2-3-2s-3 .895-3 2m6 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m14 0c0-3.314-3.134-6-7-6s-7 2.686-7 6M5 10v6a2 2 0 002 2h10a2 2 0 002-2v-6" />
            </svg>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 transform transition-all duration-500 hover:scale-105">
            Maitri Yatra
          </h1>
          <h2 className="text-3xl font-bold mb-6 opacity-90">
            Empowering Women and Children Since 2004
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-80">
            Join us in creating a brighter future for our community
          </p>
          <a href="#donate" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg">
            Donate Now
          </a>
        </div>
      </section>
    );
  };
  
  export default HeaderSection;