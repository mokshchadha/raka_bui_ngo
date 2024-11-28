const AboutSection = () => {
    return (
      <section id="about" className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-blue-600 text-center animate-fade-in">
            About Us
          </h2>
  
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg leading-relaxed text-gray-700">
                Founded in 2004, our NGO is driven by compassion and a commitment to uplift the underprivileged. Starting with a dedicated group of women in the slum areas of Charaan Khad, Dharamshala, we began by motivating families to prioritize education over child labor.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                <p className="font-bold text-blue-600 mb-2">Our Impact</p>
                <p className="text-gray-700">Successfully enrolled 65+ children in schools, with many more continuing their education journey.</p>
              </div>
            </div>
  
            <div className="space-y-6 animate-slide-in-right">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">What We Do</h3>
                <div className="space-y-4">
                  {[
                    { title: "Education Support", description: "Connecting children to schools, providing assistance, setting up libraries" },
                    { title: "Skill Development", description: "Conducting tuition sessions, personality development programs, counseling" },
                    { title: "Health & Legal Awareness", description: "Organizing health programs, addressing social issues, offering legal guidance" },
                    { title: "Community Support", description: "Helping vulnerable groups, fostering self-sufficiency among women" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-blue-50 rounded-lg transform transition duration-300 hover:bg-blue-100 hover:scale-102"
                    >
                      <h4 className="font-bold text-blue-600">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;