import Image from "next/image";
import Link from "next/link";
import { Balsamiq_Sans } from "next/font/google";
import AboutSection from "./about";

const balsamiq = Balsamiq_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-blue-50 ${balsamiq.className}`}>
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-1xl font-bold">Yatra Sanstha Samiti</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#journey" className="hover:underline">
                  Our Journey
                </Link>
              </li>
              <li>
                <Link href="#donate" className="hover:underline">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-b from-blue-600 to-blue-400 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mc-4">Yatra Sanstha Samiti</h1>
            <h2 className="text-2xl font-bold mb-4">
              Empowering Women and Children Since 2004
            </h2>
            <p className="text-xl mb-8">
              Join us in creating a brighter future for our community
            </p>
            <Link
              href="#donate"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-full text-lg transition duration-300"
            >
              Donate Now
            </Link>
          </div>
        </section>

        <section id="about" className="py-6 bg-white">
          <div className="container mx-auto text-center">
            <AboutSection />
            <Image
              src="/kid.jpg"
              alt="Yatra Sanstha Samiti Team"
              width={600}
              height={400}
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
        </section>

        <section id="journey" className="py-16 bg-blue-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-600">
              Our Journey
            </h2>
            <p className="text-lg mb-8">
              Discover the milestones and achievements of Yatra Sanstha Samiti
              since 2004.
            </p>
            <Link
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300"
            >
              Know Us
            </Link>
          </div>
        </section>

        <section id="donate" className="py-16 bg-yellow-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-600">
              Support Our Cause
            </h2>
            <p className="text-lg mb-8">
              Your contribution can make a significant difference in the lives
              of women and children.
            </p>
            <Link
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300"
            >
              Make a Donation
            </Link>
          </div>
        </section>

        <section id="contact" className="py-16 bg-green-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-600">
              Get in Touch
            </h2>
            <p className="text-lg mb-8">
              Have questions or want to get involved? We&lsquo;d love to hear
              from you!
            </p>
            <Link
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300"
            >
              Connect with us
            </Link>
          </div>
        </section>

        <section id="volunteer" className="py-16 bg-purple-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-600">
              Volunteer With Us
            </h2>
            <p className="text-lg mb-8">
              Join our team of dedicated volunteers and make a difference in
              your community.
            </p>
            <Link
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300"
            >
              Become a Volunteer
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Yatra Sanstha Samiti. All rights reserved.</p>
          <p className="mt-2">Founded by Miss Raka Kaul Labroo</p>
        </div>
      </footer>
    </div>
  );
}
